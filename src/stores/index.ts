/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/prefer-spread */
import type { Reducer } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import type { ThemeInfo } from './features/Themes';
import themes from './features/Themes';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['themes'],
};

const rootReducer = combineReducers({
  themes,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfigureStore = (reducer: Reducer) =>
  configureStore({
    reducer,
  });

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfigureStore(rootReducer);
  }

  const store = makeConfigureStore(persistedReducer);
  const persistor = persistStore(store);

  return { persistor, ...store };
};

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
  themes: ThemeInfo;
};

// const store = makeStore();
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
