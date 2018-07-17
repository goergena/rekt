import React, { Component } from 'react'
// import axios from "axios";
import LeaguePage from '../LeaguePage/LeaguePage.js';
import API from '../../utils/API.js'


class BowlingPage extends Component {
    state = {
        towns: [],
        sport: {},
        townSports: [],
        leagues: [],
        sportTest: [],
        teams: []

    }

      componentDidMount() {
        this.callApi();
        this.getLeagues();
        this.testLeagues();
        this.testTeams();
      }
    
      callApi = async () => {
        // Moved to utils/API.js
      API.getBowling()
      .then(res => this.setState({ 
        sport: res.data,
        towns: res.data.Towns }))
      .catch(err => console.log(err));
    };

    getLeagues = () => {
        // Moved to utils/API.js
        API.getLeagueList()
        .then(res => this.setState({ 
          townSports: res.data}))
        .catch(err => console.log(err));
    };

    testSportsByTowns = () => {
        // Moved to utils/API.js
        API.getSportsByTown(1)
        .then(res => this.setState({ 
          sportTest: res.data}))
        .catch(err => console.log(err));
    };

    testLeagues = () => {
        // Moved to utils/API.js
        API.getLeagueListBetter('1')
        .then(res => this.setState({ 
          leagues: res.data}))
        .catch(err => console.log(err));
    };

    testTeams = () => {
        // Moved to utils/API.js
        API.getTeamList(1)
        .then(res => this.setState({ 
          teams: res.data}))
        .catch(err => console.log(err));
    };

      
      render() {
        return (
            <div>
                <h2>Cities that Offer Bowling</h2>
                {console.log(this.state.sport)}
                {console.log('next is leagues')}
                {console.log(this.state.leagues)}
                {console.log('next is teams')}
                {console.log(this.state.teams)}
                {/*Links Displayed Information --> Leagues*/}
                <div className="container">
                    <div className="row"> {
                        this.state.towns.map(place => (
                            <div key={place.id} className="col-md">
                            {/* City logo + Leagues go Here */}
                                <div><img src={'https://ae01.alicdn.com/kf/HTB1wnzCKVXXXXb3XVXXq6xXFXXXK/CLEVELAND-City-Decal-Landmark-Skyline-Wall-Stickers-Sketch-Decals-Poster-Parede-Home-Decor-Sticker.jpg_640x640.jpg'} alt="Test" className="img-responsive" height="125" width="125" /> </div>
                                <h1>{place.town}</h1>
                            </div>
                        ))
                    }
                    </div>
                    <LeaguePage 
                    townSports={this.state.townSports}
                    sport={this.state.sport} />
                    <p>eventually store the town logo in the town table </p>
                </div>
            </div>
        )
    }

}


export default BowlingPage;
