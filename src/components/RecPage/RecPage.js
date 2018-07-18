import React, { Component } from 'react';

class RecPage extends Component {
  render() {
    return (
    <div className="StatsPage container">
      <h2>Rec Page</h2>
      <h2>Welcome "insert name here", Recreational Coordinator for Blakewood</h2>

    <div className="card">
    <div className="card-title">Write an Announcement</div>
      <form>
        <div className="form-group">
            <label htmlFor="sport">Sport</label>
            <select className="form-control" id="sport">
              <option >Choose...</option>
              <option value="bowling">Bowling</option>
              <option value="softball">Softball</option>
              <option value="basketball">Basketball</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="league">League</label>
            <select multiple className="form-control" id="league">
                <option >Choose...</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="announcement">Announcement</label>
            <textarea className="form-control" id="announcement" rows="3"></textarea>
        </div>

        <button className="btn btn-primary">Submit</button>
        </form>
        </div>
      
    </div>
        
    );
  }
}

export default RecPage;