import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>REKT</h2>
        <a href="/login">Login</a>
        <br />
        <a href="/buySell">Buy & Sell Equipment</a>
        <br />
        <a href="/stats">Stats</a>
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