import React from 'react';
import API from '../../utils/API';
import './teamtable.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class TeamTable extends React.Component {
  state= {
    teams: [],
    selectTeamId: 2
  }
  componentDidMount() {
    API.getTeamList().then(res => (this.setState({teams: res.data})))
  }

  componentDidUpdate() {
    API.getTeamList().then(res => (this.setState({teams: res.data})))
  }

  render() {
    return (
    <div className='row'>

      {this.state.teams.map(team => (
        <div key={team.id} className='col-md-12 teamTable'>
   
          <h3 className="text-center">{team.teamName}</h3> 
          <h4 className="text-center">Wins: {team.wins} Losses: {team.losses} Total Games: {team.totalGames}</h4>
          <BootstrapTable data= {team.Players} >
            <TableHeaderColumn width='150' dataField='playerName' isKey>Player</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='average'>Average</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='handicap'>Handicap</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='bestScore'>Best Score</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='totalStrikes'>Total Strikes</TableHeaderColumn>
          </BootstrapTable>
       
      </div>
      ))}

      </div>
   
    );
  }
}
