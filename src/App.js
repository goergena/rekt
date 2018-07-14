import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage.js';
import StatsPage from './components/StatsPage/StatsPage.js';
import BowlingPage from './components/BowlingPage/BowlingPage.js';
import RecPage from './components/RecPage/RecPage.js';
import LeaguePage from './components/LeaguePage/LeaguePage.js';
import Product from './components/Product/Product.js';
// import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
// import axios from "axios";
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

const ProductPage = () => (
  <Product />
)

const CantFind = () => (
  <NotFound />
)

const Loading = () => (
  <Callback />
)
class App extends Component {
  
  componentDidMount() {

  }

  //         <footer>
  //            {/* REKT */}
  //         </footer>
  //     </div>)
        


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
          <h1 className="App-title">Welcome to Rekt {this.props.name} </h1>
        </header>
<<<<<<< HEAD
        {/* {mainComponent} */}
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
=======
        {mainComponent}
>>>>>>> acdb08597a86e519e80682ef4342ac51251a0087
   
        <Router>
          <div className="App">
            <Route path="/login" component={Login} />
            <Route path="/rec" component={Rec} />
<<<<<<< HEAD
            <Route path="/products" component={ProductList} />
=======
>>>>>>> acdb08597a86e519e80682ef4342ac51251a0087
            <Route path="/leagues/mondays" component={League} />
            <Route path="/bowling" component={Bowling} />
          </div></Router>

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
