import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from '@8base/apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const URI = 'https://api.8base.com/cjvsrlv9k000201p3amkjgsfu';

const apolloClient = new ApolloClient({
  uri: URI,
  withAuth: false
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
