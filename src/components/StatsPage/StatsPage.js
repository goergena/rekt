import React, { Component } from 'react';

const bowlers = ['Ali', 'Zach', 'Amanda', 'Anthony'];
let teamScore = 0;


class StatsPage extends Component {
  render() {
    return (
    <div className="StatsPage container">
      <h2>Stats Page</h2>
      <h2>Welcome "insert name here", Statistician for Blakewood</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label for="sport">Sport</label>
            <select id="sport" className="form-control">
              <option >Choose...</option>
              <option value="bowling">Bowling</option>
              <option value="softball">Softball</option>
              <option value="basketball">Basketball</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="league">League</label>
            <select id="league" className="form-control">
              <option >Choose...</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
            </select>
          </div>

          <div className="form-group col-md-4">
            <label for="team">Team</label>
            <select id="team" className="form-control">
              <option >Choose...</option>
              <option value="dusty">TeamDusty</option>
              <option value="mike">TeamMike</option>
              <option value="sean">TeamSean</option>
            </select>
          </div>
 
          <button type="submit" className="btn btn-primary my-1">Submit</button>
        </div>
      </form>
  <br />
  <br />
  
<h4>Team: (insert selected teamName here)</h4>
<h5>team score: {teamScore}</h5>
<br />

<form>
  <div className="form-row">
    <div className="form-group col-md-2">
      <label for="inputDate">Date</label>
      <input type="text" className="form-control" id="Date"/>
    </div>
    <div className="form-group col-md-2">
      <label for="inputWin">Game Result</label>
      <select id="inputWin" className="form-control">
        <option>Choose...</option>
        <option value="1">Win</option>
                <option value="0">Loss</option>
                <option value="tie">Tie</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="teamScore">Score</label>
      <input type="text" className="form-control" id="teamScore"/>
    </div>
  </div>

  <div className="form-row">
  <ol>
            <li>{bowlers[0]}  
            <div className="form-group col-md-2">
      <label for="score">Score</label>
      <input type="text" className="form-control" id="score"/>

    </div>
            </li>     
            <li>{bowlers[1]}</li> 
            <li>{bowlers[2]}</li> 
            <li>{bowlers[3]}</li>      

        </ol>
  </div>
</form>




<h6>dont remember what i wanted here</h6>
  
        </div>
 
  


        
    );
  }
}

export default StatsPage;