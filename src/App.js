import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
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
// );

const Home = () => (
  <HomePage />
);

const Stats = () => (
  <StatsPage />
);

const Rec = () => (
  <RecPage />
)

const League = () => (
  <LeaguePage />
)

const Bowling = () => (
  <BowlingPage />
)

class App extends Component {

    state = {
      response: '',
      example: ''
    };
  
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  //   this.searchSports();
  // }

  render() {
    return (<div className="container">
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

          <footer>
             {/* REKT */}
          </footer>
      </div>)
  }

  // callApi = async () => {
    // const response = await fetch('/api/hello');
    // const body = await response.json();

  //   return (<div className="container">
  //         <div className="row">
  //             <div className="col-md-12">
  //                 <h1>Buy or Sell Your Equipment</h1>
  //             </div>
  //         </div>
  //         <div className="row">
  //             <div className="col-md-8">
  //                 <ProductList />
  //             </div>
  //             <div className="col-md-4">
  //                 <Cart />
  //             </div>
  //         </div>

  //         <footer>
  //            {/* REKT */}
  //         </footer>
  //     </div>)
        
     

  // }
}
// const App = () => {
//   return (
//       <div className="container">
//           <div className="row">
//               <div className="col-md-12">
//                   <h1>Buy or Sell Your Equipment</h1>
//               </div>
//           </div>
//           <div className="row">
//               <div className="col-md-8">
//                   <ProductList />
//               </div>
//               <div className="col-md-4">
//                   <Cart />
//               </div>
//           </div>

//           <footer>
//              {/* REKT */}
//           </footer>
//       </div>
//   );
// }

export default App;
