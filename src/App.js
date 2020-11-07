import React from 'react';
import StoreProvider from './store/Provider';
import RoutesPrivate from './routes/private/private';
import Toast from './components/Toast';

import Login from './pages/Login';
import Nav from './pages/Nav';
import Home from './pages/Home';
import history from './services/history';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router history={history}>
        <StoreProvider>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/login" component={Login} />
            <RoutesPrivate path="/nav" component={Nav} />
            <RoutesPrivate path="/home" exact component={Home} />
          </Switch>
        </StoreProvider>
      </Router>
      <Toast autoClose={5000} />
    </>
  );
}

export default App;
