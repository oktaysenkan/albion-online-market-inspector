import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { RecoilRoot } from 'recoil';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <GeistProvider>
        <CssBaseline />
        <App />
      </GeistProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
