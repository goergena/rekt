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
import Login from './components/LoginPage/LoginPage.js';
import NotFound from './components/NotFound/NotFound.js';
import Callback from './components/Callback/Callback.js';
import NavBar from './components/NavBar/NavBar.js';

// const Home = () => (
//   <HomePage />
// );

// const Login = () => (
//   <LoginPage />
// )

// const Rec = () => (
//   <RecPage />
// )

// const League = () => (
//   <LeaguePage />
// )

// const Bowling = () => (
//   <BowlingPage />
// )

const Loading = () => (
  <Callback />
)
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
            <Route path="/homepage" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/rec" component={Rec} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/leagues/mondays" component={League} />
            <Route path="/bowling" component={Bowling} />
          </div></Router>

      </div>
    );
  }
}

 export default App;
