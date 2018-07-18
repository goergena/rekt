import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage.js';
import StatsPage from './components/StatsPage/StatsPage.js';
import Bowling from './components/BowlingPage/BowlingPage.js';
import Rec from './components/RecPage/RecPage.js';
import League from './components/LeaguePage/LeaguePage.js';
import Product from './components/Product/Product.js';
// import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
// import axios from "axios";
import NotFound from './components/NotFound/NotFound.js';
import Callback from './components/Callback/Callback.js';
import NavBar from './components/NavBar/NavBar.js';
import ScoreKeeping from './components/StatsPage/ScoreKeeping.js';
import TeamTable from './components/StatsPage/TeamTable.js';
import TeamCreation from './components/LeaguePage/LeaguePage.js';

// const Home = () => (
//   <HomePage />
// );

const Table = () => (
  <TeamTable />
)

const ScoreKeep = () => (
  <ScoreKeeping />
)

// const Rec = () => (
//   <RecPage />
// )

const TeamCreate = () => (
  <TeamCreation />
)

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
            <Route path="/rec" component={Rec} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/league" component={TeamCreate} />
            <Route path="/bowling" component={Bowling} />
            <Route path="/scorekeeping" component={ScoreKeep} />
            <Route path ="/teamtable" component={Table} />
          </div></Router>

      </div>
    );
  }
}

 export default App;
