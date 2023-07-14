/* eslint-disable import/no-unresolved */
import '../styles/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Global } from '@emotion/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ErrorFallback } from '../components/items/ErrorFallback';
import type { RootState } from '../stores';
import { persistor, wrapper } from '../stores';
import { globalStyles } from '../styles/reset';

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const themeInfo = useSelector((state: RootState) => state.themes);

  return (
    <>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyles(themeInfo.theme)} />
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              void router.back();
            }}
          >
            <Component {...pageProps} />
          </ErrorBoundary>
        </QueryClientProvider>
      </PersistGate>
    </>
  );
};

export default wrapper.withRedux(App);
