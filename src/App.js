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

const Login = () => (
  <LoginPage />
);

const Home = () => (
  <HomePage />
);

const Stats = () => (
  <StatsPage />
)

const StatsTop = () => (
  <StatsTop />
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/stats" component={Stats} />
          <Route path="/stats&top" component={StatsTop} />
        </div>
      </Router>
    );
  }
}

export default App;
