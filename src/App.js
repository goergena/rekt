import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage.js';
import HomePage from './components/HomePage/HomePage.js';


const Login = () => (
  <LoginPage />
);

const Home = () => (
  <HomePage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
