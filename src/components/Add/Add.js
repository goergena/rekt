import React from 'react';
import API from '../../utils/API';


export default class Add extends React.Component {
  state= {
    teamName: '',
    wins: 0,
    losses: 0,
    totalGames: 0,
    playerName: '',
    average: 0,
    handicap: 0,
    bestScore: 0,
    totalStrikes: 0,
    chosenTeam: 1,
    teams: []
  }

  componentDidMount() {
    API.getTeamList().then(res => (this.setState({teams: res.data})))
  }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value.trim()
        });
      };
    
      handleTeamSubmit = (event) => {
          event.preventDefault();
          const newTeam = {
            teamName: this.state.teamName,
            wins: this.state.wins,
            losses: this.state.losses,
            totalGames: this.state.totalGames
          }

          API.postTeam(newTeam)
            .then(window.location = '/teams')
            .catch(err => console.log(err));
      };

      handleSelectChange = (event) => {
          console.log(event);
          this.setState({
            chosenTeam: event.target.value
          });
      };

      handlePlayerSubmit = (event) => {
        event.preventDefault();
        if(this.state.average>300 || this.state.bestScore >300 || this.state.handicap>300) {
          alert('Cannot exceed 300');
          return;
        }
        if(this.state.average<0 || this.state.bestScore <0 || this.state.handicap<0 || this.state.totalStrikes < 0) {
          alert('No negative values');
          return;
        }
        const newplayer = {
          playerName: this.state.playerName,
          average: this.state.average,
          handicap: this.state.handicap,
          bestScore: this.state.bestScore,
          totalStrikes: this.state.totalStrikes,
          TeamId: this.state.chosenTeam
        }
    
        API.postPlayer(newplayer)
           .then(window.location = '/teams')
          .catch(err => console.log(err));
    };





    render() {
      return (

        <div className="card-deck">

        <div className="card">
   
      <form className="p-2">
      <h5>Add a Team</h5>
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
  <button    disabled={!(this.state.teamName)}
      onClick={this.handleTeamSubmit} type="button" className="btn btn-primary">Save changes</button>
</form>
</div>

<div className="card">
<form className="p-2">
      <h5>Add a Player</h5>
   
<div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Team</label>
    <select className="form-control" id="exampleFormControlSelect1" onChange={this.handleSelectChange} value={this.state.chosenTeam}>
    {this.state.teams.map(team => (
        <option key={team.id} value={team.id}>{team.teamName}</option>
    ))}
    </select>
  </div>
  <div className="form-group">
  <label htmlFor="playerName">Name (required)</label>
    <input value={this.state.playerName} onChange={this.handleInputChange} type="text" className="form-control" name="playerName"/>
  </div>
  <div className="form-group">
  <label htmlFor="average">Average (required)</label>
    <input  value={this.state.average} onChange={this.handleInputChange} type="number" className="form-control" name="average"/>
  </div>
  <div className="form-group">
  <label htmlFor="Handicap">Handicap</label>
    <input value={this.state.handicap} onChange={this.handleInputChange} className="form-control" name="handicap"/>
  </div>
  <div className="form-group">
  <label htmlFor="Best Score">Best Score</label>
    <input value={this.state.bestScore} onChange={this.handleInputChange} type="number" className="form-control" name="bestScore" placeholder="Best Score"/>
  </div>
  <div className="form-group">
  <label htmlFor="Total Strikes">Total Strikes</label>
    <input  value={this.state.totalStrikes} onChange={this.handleInputChange}type="number" className="form-control" name="totalStrikes" placeholder="Total Strikes"/>
  </div>
  <button    
    disabled={!(this.state.playerName && this.state.average)}
    onClick={this.handlePlayerSubmit} type="button" className="btn btn-primary">Save changes</button>

</form>
</div>
</div>

      );
    }
  }


