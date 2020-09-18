import React from 'react';

import Login from './pages/Login';
import Nav from './pages/Nav';
import Home from './pages/Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/nav" component={Nav} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
  </Router>
  );
}

export default App;
