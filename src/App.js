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
<<<<<<< HEAD
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
=======
import axios from "axios";

>>>>>>> f64968665086bee8364833edfcc295f18b2f1529

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
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    this.searchSports();
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

<<<<<<< HEAD
   <div className="container">
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
      </div>
        </div>
      </Router>
=======
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  searchSports = query => {
    axios.get('/api/sports')
      .then(res => this.setState({ example: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rekt</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <p>{console.log(this.state.example)}</p>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/stats" component={Stats} />
            <Route path="/rec" component={Rec} />
            <Route path="/bowling/blakewood/mondays" component={League} />
            <Route path="/bowlingpage" component={Bowling} />
          </div>
        </Router>
      </div>
>>>>>>> f64968665086bee8364833edfcc295f18b2f1529
    );
  }
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
