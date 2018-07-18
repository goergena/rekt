import React from 'react';
import API from '../../utils/API';


export default class ModalAddTeam extends React.Component {
  state= {
    teamName: '',
    wins: 0,
    losses: 0,
    totalGames: 0
  }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value.trim()
        });
      };
    
      handleFormSubmit = (event) => {
          event.preventDefault();
          const newTeam = {
            teamName: this.state.teamName,
            wins: this.state.wins,
            losses: this.state.losses,
            totalGames: this.state.totalGames

          }

          API.postTeam(newTeam)
            .catch(err => console.log(err));
      };



    render() {
      return (
      <div>
          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#addTeamModal">
+ Team
</button>

<div className="modal fade" id="addTeamModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">New Team</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <form>
        <div className="form-group">
          <label htmlFor="teamName">Team</label>
          <input value={this.state.teamName} onChange={this.handleInputChange} type="text" className="form-control" name="teamName" placeholder="Name (required)"/>
        </div>
        <div className="form-group">
          <input  value={this.state.wins} onChange={this.handleInputChange} type="number" className="form-control" name="wins"/>
        </div>
  <div className="form-group">
  <label></label>
    <input value={this.state.losses} onChange={this.handleInputChange} className="form-control" name="losses" placeholder="Handicap (required)"/>
  </div>
  <div className="form-group">
    <input value={this.state.totalGames} onChange={this.handleInputChange} type="number" className="form-control" name="totalGames" placeholder="Best Score"/>
  </div>
  <div className="form-group">
    <input  value={this.state.totalStrikes} onChange={this.handleInputChange}type="number" className="form-control" name="totalStrikes" placeholder="Total Strikes"/>
  </div>
</form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      <button    
      disabled={!(this.state.teamName)}
                onClick={this.handleFormSubmit} type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

</div> 
      </div>
      );
    }
  }

