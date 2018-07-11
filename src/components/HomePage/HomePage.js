import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>REKT</h2>
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
          <a href="/stats">Stat Coordinator Page </a>
        </div>
        }
        <br />
        <a href="/buySell">Buy & Sell Equipment</a>
        <br />
        <a href="/rec">Rec Coord Page </a>
        <br />
        <a href="/leagues/mondays">LEAGUE </a>
        <br />
        <a href="/bowling">Bowling </a>
      </div>
    );
  }
}

export default HomePage;