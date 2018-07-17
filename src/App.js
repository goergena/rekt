import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
// import HomePage from './components/HomePage/HomePage.js';
// import StatsPage from './components/StatsPage/StatsPage.js';
import BowlingPage from './components/BowlingPage/BowlingPage.js';
import RecPage from './components/RecPage/RecPage.js';
import LeaguePage from './components/LeaguePage/LeaguePage.js';
// import Product from './components/Product/Product.js';
// import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
// import axios from "axios";
import LoginPage from './components/LoginPage/LoginPage.js';
// import NotFound from './components/NotFound/NotFound.js';
// import Callback from './components/Callback/Callback.js';
=======
import HomePage from './components/HomePage/HomePage.js';
import StatsPage from './components/StatsPage/StatsPage.js';
import Bowling from './components/BowlingPage/BowlingPage.js';
import Rec from './components/RecPage/RecPage.js';
import League from './components/LeaguePage/LeaguePage.js';
import Product from './components/Product/Product.js';
// import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
// import axios from "axios";
import Login from './components/LoginPage/LoginPage.js';
import NotFound from './components/NotFound/NotFound.js';
import Callback from './components/Callback/Callback.js';
>>>>>>> 5b540dd0dfa15945b2b212c4786d8bdf6f1b1811
import NavBar from './components/NavBar/NavBar.js';
import ScoreKeeping from './components/StatsPage/ScoreKeeping.js';
import TeamTable from './components/StatsPage/TeamTable.js';

// const Home = () => (
//   <HomePage />
// );

<<<<<<< HEAD
const Table = () => (
  <TeamTable />
)

const ScoreKeep = () => (
  <ScoreKeeping />
)

const Login = () => (
  <LoginPage />
)
=======
// const Login = () => (
//   <LoginPage />
// )
>>>>>>> 5b540dd0dfa15945b2b212c4786d8bdf6f1b1811

// const Rec = () => (
//   <RecPage />
// )

// const League = () => (
//   <LeaguePage />
// )

// const Bowling = () => (
//   <BowlingPage />
// )

// const Loading = () => (
//   <Callback />
// )

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <NavBar></NavBar>
        </header>
         {/*mainComponent*/}

        <Router>
          <div className="App">
            <Route path="/login" component={Login} />
            <Route path="/rec" component={Rec} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/leagues/mondays" component={League} />
            <Route path="/bowling" component={Bowling} />
            <Route path="/scorekeeping" component={ScoreKeep} />
            <Route path ="/teamtable" component={Table} />
          </div></Router>

      </div>
    );
  }
}

 export default App;
