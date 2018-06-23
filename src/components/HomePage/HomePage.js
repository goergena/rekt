import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>Home Page</h2>
        <a href="/login">Login Page</a>
        <a href="/statstop">Stats Top</a>
        <a href="/stats">Stats</a>
        </div>
    );
  }
}

export default HomePage;
