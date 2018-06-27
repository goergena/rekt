import React, { Component } from 'react';

const bowlers = ['Ali, Zach, Amanda, Anthony'];
let teamScore = 0;


class StatsPage extends Component {
  render() {
    return (
    <div class="StatsPage container">
        <h2>Stats Page</h2>
        <h2>Welcome "insert name here", Statistician for Blakewood</h2>
       <form>
         <div class="form-row">
          <div class="form-group col-md-4">
            <label for="sport">Sport</label>
            <select id="sport" className="form-control">
                <option >Choose...</option>
                <option value="bowling">Bowling</option>
                <option value="softball">Softball</option>
                <option value="basketball">Basketball</option>
            </select>
            </div>
            <div class="form-group col-md-4">
            <label for="league">League</label>
            <select id="league" className="form-control">
                <option >Choose...</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
            </select>
            </div>

             <div class="form-group col-md-4">
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

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
</form>

<h5> place for date select, then win/loss/tie </h5>
<h5>team score: {teamScore}</h5>

<h6>dont remember what i wanted here</h6>
        <ol>
            <li>{bowlers[0]}</li>
            <li>{bowlers[1]}</li>
            <li>{bowlers[2]}</li>
            <li>{bowlers[3]}</li>

        </ol>
    </div>


        
    );
  }
}

export default StatsPage;