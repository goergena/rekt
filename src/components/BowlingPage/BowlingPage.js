import React, { Component } from 'react'
// import axios from "axios";
import LeaguePage from '../LeaguePage/LeaguePage.js';
import API from '../../utils/API.js'


class BowlingPage extends Component {
    state = {
        teams: []
    }

      componentDidMount() {
        this.getTeams();
      }
 

    getTeams = () => {
        // Moved to utils/API.js
        API.getTeamList()
        .then(res => this.setState({ 
          teams: res.data}))
        .catch(err => console.log(err));
    };

      
      render() {
        return (
            <div>
                <h2>Cities that Offer Bowling</h2>
                {console.log(this.state.teams)}
                {/*Links Displayed Information --> Leagues*/}
                <div className="container">
                    <div className="row"> {
                        this.state.teams.map(team => (
                            <div key={team.id} className="col-md">
                            {/* City logo + Leagues go Here */}
                                <div><img src={'https://ae01.alicdn.com/kf/HTB1wnzCKVXXXXb3XVXXq6xXFXXXK/CLEVELAND-City-Decal-Landmark-Skyline-Wall-Stickers-Sketch-Decals-Poster-Parede-Home-Decor-Sticker.jpg_640x640.jpg'} alt="Test" className="img-responsive" height="125" width="125" /> </div>
                                <h1>{team.teamName}</h1>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }

}


export default BowlingPage;
