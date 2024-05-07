import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/home';
import Profile from '../components/profile';
import Wallet from '../components/Wallet';
import Grants from '../components/grants';
import Dashboard from '../components/dashboard';
import Main from './Main';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/Home" component={Home} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Wallet" component={Wallet} />
        <Route path="/Grants" component={Grants} />
        <Route path="/Dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
