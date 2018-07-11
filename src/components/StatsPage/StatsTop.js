
import React, { Component } from 'react';

class StatsTop extends Component {
  render() {
    return (
    <div>
        <h2>Welcome "insert name here", Statistician for Blakewood, to the secret page</h2>
       <form>
            <label for="sport">Sport</label>
            <select id="sport">
                <option >Choose...</option>
                <option value="bowling">Bowling</option>
                <option value="softball">Softball</option>
                <option value="basketball">Basketball</option>
            </select>

            <label for="league">League</label>
            <select id="league">
                <option >Choose...</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
            </select>

            <label for="team">Team</label>
            <select id="team">
                <option >Choose...</option>
                <option value="dusty">TeamDusty</option>
                <option value="mike">TeamMike</option>
                <option value="sean">TeamSean</option>
            </select>
 
 
 
            <button type="submit" className="btn btn-primary my-1">Submit</button>
        </form>
        
    </div>
        
    );
  }
}

export default StatsTop;



