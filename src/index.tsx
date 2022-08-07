import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './app';
import store from './store';

import './locales';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.querySelector('#app');

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <App />
        </StrictMode>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </Provider>,
  );
}
