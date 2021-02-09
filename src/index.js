import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/react';

import configureStore from '@store/index';

import App from './App';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import reportWebVitals from './reportWebVitals';

if (
  process.env.REACT_APP_SENTRY_ENABLED === 'true' ||
  process.env.NODE_ENV === 'production'
) {
  Sentry.init({
    // NOTE: Make sure you have valid dsn. otherwise your app will crash while tring to connect to Sentry Server
    dsn: '__YOUR_DSN__',
    release: `mofid-react-boilerplate@${process.env.REACT_APP_VERSION}`,
  });
}

ReactDOM.render(
  <StrictMode>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
