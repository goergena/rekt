import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
//import axios from 'axios';
import './App.css';
// import LoginPage from './components/LoginPage/LoginPage.js';
import HomePage from './components/HomePage/HomePage.js';
import StatsPage from './components/StatsPage/StatsPage.js';
import BowlingPage from './components/BowlingPage/BowlingPage.js';
import RecPage from './components/RecPage/RecPage.js';
import LeaguePage from './components/LeaguePage/LeaguePage.js';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

// const Login = () => (
//   <LoginPage />
import axios from "axios";
import LoginPage from './components/LoginPage/LoginPage.js';
import NotFound from './components/NotFound/NotFound.js';
import Callback from './components/Callback/Callback.js'

// const Home = () => (
//   <HomePage />
// );

const Login = () => (
  <LoginPage />
)

const Rec = () => (
  <RecPage />
)

const League = () => (
  <LeaguePage />
)

const Bowling = () => (
  <BowlingPage />
)

const CantFind = () => (
  <NotFound />
)

const Loading = () => (
  <Callback />
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
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
    this.searchSports();
    this.searchOne();
    this.searchTwo();
    this.searchThree();
   // this.searchFour();
  }


  // callApi = async () => {
    // const response = await fetch('/api/hello');
    // const body = await response.json();

  searchSports = query => {
    axios.get('/api/sports')
      .then(res => this.setState({ example: res.data }))
      .catch(err => console.log(err));
  };

  //         <footer>
  //            {/* REKT */}
  //         </footer>
  //     </div>)
        
     

  searchOne = () => {
    axios.get('/api/sports/bowling')
      .then(res => this.setState({ 
        bowling: res.data,
        townsApp: res.data.Towns }))
      .catch(err => console.log(err));
  };

  searchTwo = () => {
    axios.get('/api/townsports/1')
      .then(res => this.setState({ blakewoodBowling: res.data }))
      .catch(err => console.log(err));
  };

  //   searchTwo = () => {
  //   axios.get('/api/leagues/1')
  //     .then(res => this.setState({ blakewoodBowling: res.data }))
  //     .catch(err => console.log(err));
  // };

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
    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <HomePage {...this.props}/>;
        break;
      case "callback":
        mainComponent = Loading();
        break;
      case "stats":
        mainComponent = this.props.auth.isAuthenticated() ? <StatsPage {...this.props}/> : <NotFound />;
        break;
      default:
        mainComponent = CantFind();
    }
  

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rekt, {this.props.name} </h1>
        </header>
        {mainComponent}
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
            <Route path="/login" component={Login} />
            <Route path="/rec" component={Rec} />

            <Route path="/leagues/mondays" component={League} />
            <Route path="/bowling" component={Bowling} />
          </div></Router>

      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <h1>Buy or Sell Your Equipment</h1>
              </div>

          </div>
          <div className="row">
              <div className="col-md-8">
                  <ProductList />
              </div>
              <div className="col-md-4">
                  <Cart />
              </div>
        </div>
      </div>
      </div>
    );
  }
}
 /* // const App = () => { */
 /* //   return (
// //       <div className="container">
// //           <div className="row">
// //               <div className="col-md-12">
// //                   <h1>Buy or Sell Your Equipment</h1>
// //               </div>
// //           </div>
// //           <div className="row">
// //               <div className="col-md-8">
// //                   <ProductList />
// //               </div>
// //               <div className="col-md-4">
// //                   <Cart />
// //               </div>
// //           </div>

// //           <footer>
// //              {/* REKT */

 export default App;
