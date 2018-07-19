import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import NavBar from './components/NavBar/index.js';
import TeamTable from './components/StatsPage/TeamTable.js';
import HomePage from './components/HomePage/HomePage';
import TeamNav from './components/StatsPage/TeamNav.js'
import Wrapper from './components/Wrapper/Wrapper.js'

import Add from './components/Add/Add.js';

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
        <Wrapper>
          <Router>
            <div className="App">
              <Route exact path = "/" component={Home} />
              <Route path="/shop" component={ProductList} />
              <Route path="/scorekeeping" component={ScoreKeep} />
              <Route path ="/teams" component={Table} />
              <Route path ="/teamnav" component={TeamNav} />
              <Route path ="/add" component={Add} />
            </div>
          </Router>
        </Wrapper>

      </div>
    );
  }
}

 export default App;
