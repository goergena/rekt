import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>Home Page  </h2>
        <a href="/login">Login Page  </a>
        <a href="/stats">Stats  </a>
        <a href="/rec">Rec Coord Page </a>
        </div>
    );
  }
}

export default HomePage;
