import React, { Component } from 'react';
import './HomePage.css';
import Jumbotron from '../Jumbotron/Jumbotron';
//  when models and pages are complete, import options
// import SportsOptions from '../SportsOptions/SportsOptions';
class HomePage extends Component {
    render() {
    return (
      <body>
      <div className="container-fluid">
      <div className="row homepage-header">
        <div className="col-sm-12" id="welcome">
          <h1>(Demo) Welcome! Click Log In to get started saving your teams stats!</h1>
          <h2>Upcoming features:</h2>
          <p>League Management, Secure Login, Player Tracking, Leaderboard, Stat Keeping</p>
        </div>
        </div>
        </div>
      </body>
    );
  }
}


export default HomePage;
