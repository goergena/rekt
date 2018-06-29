import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage.js';
import HomePage from './components/HomePage/HomePage.js';
import StatsPage from './components/StatsPage/StatsPage.js';
import StatsTop from './components/StatsPage/StatsTop.js';
import BowlingPage from './components/BowlingPage/BowlingPage.js';
import './firebase/firebase';

const Login = () => (
  <LoginPage />
);

const Home = () => (
  <HomePage />
);

const Stats = () => (
  <StatsPage />
);

const StatsA = () => (
  <StatsTop />
);

const Bowling = () => (
  <BowlingPage />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        Test
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/stats" component={Stats} />
          <Route path="/statstop" component={StatsA} />
          <Route path="/bowlingpage" component={Bowling} />

        </div>
      </Router>
    );
  }
}

export default App;
