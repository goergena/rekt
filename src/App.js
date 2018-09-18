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
import Shop from './components/Shop.js';

// const Home = () => ( <HomePage />);

// const Table = () => ( <TeamTable />)



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
              <Route exact path = "/" component={HomePage} />
              {/* <Route path="/shop" component={ProductList} /> */}
              <Route path ="/teams" component={TeamTable} />
              <Route path ="/teamnav" component={TeamNav} />
              <Route path ="/add" component={Add} />
              <Route path="/shop" component={Shop} />
            </div>
          </Router>
        </Wrapper>

      </div>
    );
  }
}

 export default App;
