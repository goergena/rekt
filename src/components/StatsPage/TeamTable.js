import React from 'react';
import API from '../../utils/API';
import './teamtable.css';
import ModalAddPlayer from './ModalAddPlayer';
import ModalAddTeam from './ModalAddTeam';

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
    <div className='container'>

      {this.state.teams.map(team => (
        <div key={team.id} className="col-md">
   
          <h2>{team.teamName}</h2> 
          <h4 className='text-center'>Wins: {team.wins} Losses: {team.losses} Total Games: {team.totalGames}</h4>
          <BootstrapTable data= {team.Players} >
            <TableHeaderColumn width='150' dataField='playerName' isKey>Player</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='average'>Average</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='handicap'>Handicap</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='bestScore'>Best Score</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='totalStrikes'>Total Strikes</TableHeaderColumn>
          </BootstrapTable>
         
          <ModalAddPlayer className="text-left" selectTeamId={this.state.selectTeamId} />
      </div>
      ))}

      <ModalAddTeam/>
    </div>
    );
  }
}


// insertRow={ true } options={ options } deleteRow={ true } selectRow={ selectRowProp }