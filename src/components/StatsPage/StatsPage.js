import React, { Component } from 'react';

const bowlers = ['Ali, Zach, Amanda, Anthony'];
let teamScore = 0;


class StatsPage extends Component {
  render() {
    return (
    <div className="StatsPage">
        <h2>Stats Page</h2>
        <ol>
            <li>{teamScore}</li>
            <li>{bowlers[0]}</li>
            <li>{bowlers[1]}</li>
            <li>{bowlers[2]}</li>
            <li>{bowlers[3]}</li>
        </ol>
    </div>
        
    );
  }
}

export default StatsPage;