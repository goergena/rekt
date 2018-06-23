import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';

const Login = () => (
  <LoginPage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
