import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '../components/items/ErrorFallback';
import { wrapper } from '../stores';
import { globalStyles } from '../styles/reset';

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            void router.back();
          }}
        >
          <Component {...pageProps} />
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
};

export default wrapper.withRedux(App);
