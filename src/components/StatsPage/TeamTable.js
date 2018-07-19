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
    <div className='row'>
    <div className='flex-column position-fixed'>
    <div id="list-example" class="list-group">

  <a className="list-group-item list-group-item-action" href="#team1"></a>
  <a className="list-group-item list-group-item-action" href="#team2">Item 2</a>
  <a className="list-group-item list-group-item-action" href="#team3">Item 3</a>
  <a className="list-group-item list-group-item-action" href="#team4">Item 4</a>
</div>
</div>
    <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" className="flex-column float-right">

      {this.state.teams.map(team => (
        <div key={team.id} id={`team${team.id}`}>
   
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
    </div>
    </div>
    );
  }
}


// insertRow={ true } options={ options } deleteRow={ true } selectRow={ selectRowProp }