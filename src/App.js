import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import NavBar from './components/NavBar/NavBar.js';
import TeamTable from './components/StatsPage/TeamTable.js';
import HomePage from './components/HomePage/HomePage';

const Home = () => ( <HomePage />);

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
            <Route exact path = "/" component={Home} />
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
