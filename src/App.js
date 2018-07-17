import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
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
import NavBar from './components/NavBar/NavBar.js';
import ScoreKeeping from './components/StatsPage/ScoreKeeping.js';
import TeamTable from './components/StatsPage/TeamTable.js';

// const Home = () => (
//   <HomePage />
// );

const Table = () => (
  <TeamTable />
)

const ScoreKeep = () => (
  <ScoreKeeping />
)

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

// const Loading = () => (
//   <Callback />
// )

class App extends Component {
  
  componentDidMount() {

  }

  //         <footer>
  //            {/* REKT */}
  //         </footer>
  //     </div>)
        


  render() {
  //   let mainComponent = "";
  //   switch(this.props.location) {
  //     case "":
  //       mainComponent = <HomePage {...this.props}/>;
  //       break;
  //     case "callback":
  //       mainComponent = Loading();
  //       break;
  //     case "stats":
  //       mainComponent = this.props.auth.isAuthenticated() ? <StatsPage {...this.props}/> : <NotFound />;
  //       break;
  //   }
  

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
            <Route path="/products" component={ProductList} />
            <Route path="/leagues/mondays" component={League} />
            <Route path="/bowling" component={Bowling} />
            <Route path="/scorekeeping" component={ScoreKeep} />
            <Route path ="/teamtable" component={Table} />
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
