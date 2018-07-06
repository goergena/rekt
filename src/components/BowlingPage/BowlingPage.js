import React, { Component } from 'react'
// Page needs to display cities with teams, city logo, and offered leagues. 
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from "axios";


class BowlingPage extends Component {
    
    state = {
        response: []
    }

    componentDidMount() {
        // this.callApi()
        //   .then(res => this.setState({ response: res.data}))
        //   .catch(err => console.log(err));

        this.searchSports();
      }
    
    //   callApi = async () => {
    //     const response = await fetch('/api/sports/bowling');
    //     const body = await response.json();
    
    //     if (response.status !== 200) throw Error(body.message);
    
    //     return body;
    //   };



  searchSports = query => {
    axios.get('/api/sports/bowling')
      .then(res => this.setState({ response: res.data }))
      .catch(err => console.log(err));
  };

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            logo: ['Test', 'Test2', 'Test3'],
            cities: ['Cleveland', 'Medina', 'Firelands'],
            leagues: ['Bowling', 'Softball'],
            dropdownOpen: false
        }
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render() {
        return (
            <div>
                <h2>Cities that Offer Bowling</h2>
                {/*Links Displayed Information --> Leagues*/}
                <div className="containter">
                    <div className="row">
                        <div className="col-md">
                        {/* City logo + Leagues go Here */}
                            <div><img src={'https://ae01.alicdn.com/kf/HTB1wnzCKVXXXXb3XVXXq6xXFXXXK/CLEVELAND-City-Decal-Landmark-Skyline-Wall-Stickers-Sketch-Decals-Poster-Parede-Home-Decor-Sticker.jpg_640x640.jpg'} alt="Test" className="img-responsive" height="125" width="125" /> </div>
                            <h1>{this.state.cities[0]}</h1>
                            <p>{this.state.leagues[0]}</p>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>Choose your League</DropdownItem>
                                    <DropdownItem href="/">Monday</DropdownItem>
                                    <DropdownItem href="/">Tuesday</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="col-md">
                            <div><img src={'http://medina-high-school-medina-ohio.runnerspace.com/members/images/4/23538_full.jpg'} alt="Test" className="img-responsive" height="125" width="125" /> </div>
                            <h1>{this.state.cities[1]}</h1>
                            <p>{this.state.leagues[0]}</p>
                        </div>
                        <div className="col-md">
                            <div><img src={'http://image.morningjournal.com/storyimage/MJ/20151229/NEWS/151229635/AR/0/AR-151229635.jpg&maxh=400&maxw=667'} alt="Test" className="img-responsive" height="125" width="125" /> </div>
                            <h1>{this.state.cities[2]}</h1>
                            <p>{this.state.leagues[1]}</p>
                        </div>
                    </div>

                            <p className="App-intro">{this.state.response}</p>
                </div>
            </div>
        )
    }

}


export default BowlingPage;
