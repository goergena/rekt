import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
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
        <a href="/buySell">Buy Equipment</a>
        <br />
        <a href="/rec">Rec Coord Page </a>
        <br />
        <a href="/leagues/mondays">Leagues </a>
        <br />
        <a href="/bowling">Bowling </a>
      </div>



    );
  }
}

export default HomePage;