import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import NavBar from './components/NavBar/NavBar.js';
import ScoreKeeping from './components/StatsPage/ScoreKeeping.js';
import TeamTable from './components/StatsPage/TeamTable.js';
import TeamCreation from './components/LeaguePage/LeaguePage.js';

// const Home = () => (
//   <HomePage />
// );

const Table = () => ( <TeamTable />)

const ScoreKeep = () => (<ScoreKeeping />)

const TeamCreate = () => (<TeamCreation />)


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar></NavBar>
        </header>

        <Router>
          <div className="App">
            <Route path="/shop" component={ProductList} />
            <Route path="/scorekeeping" component={ScoreKeep} />
            <Route path ="/bowlingstats" component={Table} />
            <Route path ="/addteam" component={TeamCreate} />
          </div></Router>

      </div>
    );
  }
}

 export default App;
