import React, {useState, useContext } from 'react';
import StoreProvider from './store/Provider';
import RoutesPrivate from './routes/private/private';

import Login from './pages/Login';
import Nav from './pages/Nav';
import Home from './pages/Home';
import history from './services/history'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return (
    <Router history={history}>
      <StoreProvider>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <RoutesPrivate path="/nav" component={Nav} />
            <RoutesPrivate path="/" exact component={Home} />
          </Switch>
        </div> 
      </StoreProvider>
  </Router>
  );
}

export default App;
