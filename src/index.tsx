import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import queryClient from './configs/query-client.config';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GeistProvider>
          <CssBaseline />
          <App />
          <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
        </GeistProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
