import React, { Component } from 'react';
import { AnnouncementBar } from 'react-announcement-bar';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h2>REKT</h2>
        <a href="/login">Login</a>
        <a href="/statstop">Stats</a>
        <a href="/buySell">Buy & Sell Equipment</a>
        

<AnnouncementBar height="60" backgroundColor="#000000" relative={false} width="100%">
       {
         () => {
           return (
             <div style={{width: "80%", margin: "auto", color: "#ffffff" }}>
                 Want to recieve notifications
                 <a href="#" style={{ fontWeight: "bold", color: "#ffffff" }}>ENABLE !</a>
             </div>
           )
         }
       }
      </AnnouncementBar>
</div>



    );
  }
}

export default HomePage;
