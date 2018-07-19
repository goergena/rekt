import React from 'react';
import API from '../../utils/API';


export default class AddTeam extends React.Component {
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
      <div className="container">


        <div className="card">
        <h5>Add a Team</h5>
      <form>
        <div className="form-group">
          <label htmlFor="teamName">Team</label>
          <input value={this.state.teamName} onChange={this.handleInputChange} type="text" className="form-control" name="teamName" placeholder="Name (required)"/>
        </div>
        <div className="form-group">
        <label htmlFor="wins">Wins</label>
          <input  value={this.state.wins} onChange={this.handleInputChange} type="number" className="form-control" name="wins"/>
        </div>
  <div className="form-group">
  <label htmlFor="losses">Losses</label>
    <input value={this.state.losses} onChange={this.handleInputChange} className="form-control" name="losses" placeholder="Handicap (required)"/>
  </div>
  <div className="form-group">
  <label htmlFor="totalGames">Total Games</label>
    <input value={this.state.totalGames} onChange={this.handleInputChange} type="number" className="form-control" name="totalGames" placeholder="Best Score"/>
  </div>
</form>
      <button    disabled={!(this.state.teamName)}
      onClick={this.handleFormSubmit} type="button" className="btn btn-primary">Save changes</button>
</div>
</div>
      );
    }
  }

