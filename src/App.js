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
import axios from "axios";


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
      response: '',
      example: [],
      bowling: {},
      blakewoodBowling: '',
      leagues: '',
      townsApp: []
    };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    this.searchSports();
    this.searchOne();
    this.searchTwo();
    this.searchThree();
   // this.searchFour();
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  searchSports = query => {
    axios.get('/api/sports')
      .then(res => this.setState({ example: res.data }))
      .catch(err => console.log(err));
  };


  searchOne = () => {
    axios.get('/api/sports/bowling')
      .then(res => this.setState({ 
        bowling: res.data,
        townsApp: res.data.Towns }))
      .catch(err => console.log(err));
  };

  searchTwo = () => {
    axios.get('/api/townsports')
      .then(res => this.setState({ blakewoodBowling: res.data }))
      .catch(err => console.log(err));
  };

  //this call works, but we're trying something else below

  // searchThree = () => {
  //   axios.get('/api/leagues/2')
  //     .then(res => this.setState({ leagues: res.data }))
  //     .catch(err => console.log(err));
  // };

  searchThree = () => {
    axios.get('/api/teams/2')
      .then(res => this.setState({ leagues: res.data }))
      .catch(err => console.log(err));
  };

  // searchFour = () => {
  //   axios.get('/api/towns')
  //     .then(res => this.setState({ towns: res.data }))
  //     .catch(err => console.log(err));
  // };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rekt</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <p>{console.log(this.state.example)}</p>
        <p>{console.log(this.state.bowling)}</p>
        <p>{console.log(this.state.bowling.Towns)}</p>
        <p>{console.log(this.state.blakewoodBowling)}</p>
        <p>{console.log(this.state.leagues)}</p>
        <p>{console.log(this.state.townsApp)}</p>
        <div>{this.state.example.map((thing, index) => (
      
        <p key={thing.id}>Testing: {thing.sport} has ID: {thing.id}</p>)
        )}
        <p>Goal- make each of these a link to their sports page (/bowling, /softball, etc)</p>
        </div>
   
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/stats" component={Stats} />
            <Route path="/rec" component={Rec} />
            <Route path="/leagues/mondays" component={League} />
            <Route path="/bowling" component={Bowling} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
