import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
// import LoginPage from './components/LoginPage/LoginPage.js';
import HomePage from './components/HomePage/HomePage.js';
import StatsPage from './components/StatsPage/StatsPage.js';
import BowlingPage from './components/BowlingPage/BowlingPage.js';
import RecPage from './components/RecPage/RecPage.js';
import LeaguePage from './components/LeaguePage/LeaguePage.js';


// const Login = () => (
//   <LoginPage />
// );

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

const Bowling = () => (
  <BowlingPage />
)

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rekt</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/stats" component={Stats} />
            <Route path="/rec" component={Rec} />
            <Route path="/bowling/blakewood/mondays" component={League} />
            <Route path="/bowlingpage" component={Bowling} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
