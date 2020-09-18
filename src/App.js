import React, {useState} from 'react';

import Login from './pages/Login';
import Nav from './pages/Nav';
import Home from './pages/Home';
import history from './services/history'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/nav" component={Nav} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      {!isLoggedIn ? history.push('/login') : null}
  </Router>
  );
}

export default App;
