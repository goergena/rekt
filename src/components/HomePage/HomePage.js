import React, { Component } from 'react';
import './HomePage.css';
import Jumbotron from '../Jumbotron/Jumbotron';
//  when models and pages are complete, import options
// import SportsOptions from '../SportsOptions/SportsOptions';
class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row homepage-header">
        <div className="col-sm-12">
          <Jumbotron />
        </div>
        </div>

        <div className="row homepage-sports-options">
        {/* <div className="col-md-4">
        <SportsOptions />
        </div>
        <div className="col-md-4">
        <SportsOptions />
        </div>
        <div className="col-md-4">
        <SportsOptions />
        </div> */}
        </div>


      
      <div className="HomePage">
        <h2>REKT</h2>
        <a href="/login">Login</a>

        {!this.props.auth.isAuthenticated() && 
        <div>
         <hr/>
            <br />
            <button onClick={this.props.auth.login}>Login</button>
          <hr/>
        </div>
        }
        <br />
        {this.props.auth.isAuthenticated() && 
        <div>
          <a href="/stats">Statistician's Portal </a>
        </div>
        }
        <br />
        <a href="/buySell">Shop</a>
        <br />
        <a href="/rec">Rec Coord Page </a>
        <br />
        <a href="/leagues/mondays">Leagues </a>
        <br />
        <a href="/bowling">Bowling </a>
      </div>
      </div>


    );
  }
}

export default HomePage;