import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>REKT</h2>
        <a href="/login">Login</a>
        <a href="/statstop">Stats</a>
        <a href="/buySell">Buy & Sell Equipment</a>
        

             <div className="announcement">
                 Receive notifications!
                 <a href="#">ENABLE!</a>
             </div>
           
      </div>



    );
  }
}

export default HomePage;
