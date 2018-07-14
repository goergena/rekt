import React, { Component } from 'react'
import axios from "axios";
import LeaguePage from '../LeaguePage/LeaguePage.js';
import API from '../../utils/API.js'


class BowlingPage extends Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            logo: ['Test', 'Test2', 'Test3'],
            sport: {},
            towns: [],
            townSports: [],
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }


      componentDidMount() {
        this.callApi();
        this.getLeagues();
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

      
      render() {
        return (
            <div>
                <h2>Cities that Offer Bowling</h2>
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
