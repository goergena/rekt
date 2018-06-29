import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage.js';
import HomePage from './components/HomePage/HomePage.js';
import StatsPage from './components/StatsPage/StatsPage.js';
import RecPage from './components/RecPage/RecPage.js';
import LeaguePage from './components/LeaguePage/LeaguePage.js';

const Login = () => (
  <LoginPage />
);

const Home = () => (
  <HomePage />
);

const Stats = () => (
  <StatsPage />
);


const Rec = () => (
  <RecPage />
)

const League = () => (
  <LeaguePage />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/stats" component={Stats} />
          <Route path="/rec" component={Rec} />
          <Route path="/bowling/blakewood/mondays" component={League} />
        </div>
      </Router>
    );
  }
}

export default App;
