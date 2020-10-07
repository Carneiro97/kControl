import React, {useState, useContext } from 'react';
import StoreProvider from './store/Provider';
import RoutesPrivate from './routes/private/private';
import StoreContext from './store/Context';

import Login from './pages/Login';
import Nav from './pages/Nav';
import Home from './pages/Home';
import history from './services/history';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  const { isLogged } = useContext(StoreContext);
  return (
    <Router history={history}>
      <StoreProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <RoutesPrivate path="/nav" component={Nav} />
            <RoutesPrivate path="/home" exact component={Home} />
          </Switch>
      </StoreProvider>
  </Router>
  );
}

export default App;
