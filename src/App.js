import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import GlobalStyle from './styles/global';

import history from './services/history';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
