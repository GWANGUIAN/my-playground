/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prefer-spread */
import type { AnyAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import { logger } from '../utils/logger';
import {
  getSessionStorageItem,
  removeSessionStorageItem,
  setSessionStorageItem,
} from '../utils/session-storage';
import type { TempInfo } from './features/temps';
import temps from './features/temps';

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({
    temps,
  })(state, action);
};

const sessionStorageMiddleware =
  ({ getState }: any) =>
  (next: any) =>
  (action: any) => {
    const result = next(action);

    if (action.type === 'temps/setTemp') {
      setSessionStorageItem(
        'tempInfo',
        JSON.stringify({ temps: getState().users }),
      );
    }

    if (action.type === 'temps/resetTemp') {
      removeSessionStorageItem('tempInfo');
    }

    return result;
  };

const reHydrateStore = () => {
  if (getSessionStorageItem('tempInfo') !== null) {
    try {
      return JSON.parse(getSessionStorageItem('tempInfo')!); // re-hydrate the store
    } catch (error) {
      logger.log(error);
    }
  }
};

const store = configureStore({
  reducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionStorageMiddleware),
});

export const wrapper = createWrapper(() => store, {
  debug: process.env.NODE_ENV === 'development',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  temps: TempInfo;
};
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
