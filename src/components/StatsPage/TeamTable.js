import React from 'react';
import API from '../../utils/API';
import ModalAddPlayer from './ModalAddPlayer';
import ModalAddTeam from './ModalAddTeam';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

function onAfterDeleteRow(rowKeys) {
    
    alert('Rows Dropped ' + rowKeys);
  }

function onAfterInsertRow(row) {
    let newRowStr = '';
  
    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row :\n ' + newRowStr);
  }
  
  const options = {
    afterInsertRow: onAfterInsertRow,
    afterDeleteRow: onAfterDeleteRow 
  };

  // If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
  };

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
        <div key={team.id}>
   
          <h2>{team.teamName}</h2> 
          <h4 className='text-center'>Wins: {team.wins} Losses: {team.losses} Total Games: {team.totalGames}</h4>
          <BootstrapTable data= {team.Players} >
            <TableHeaderColumn width='150' dataField='playerName' isKey>Player</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='average'>Average</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='handicap'>Handicap</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='bestScore'>Best Score</TableHeaderColumn>
            <TableHeaderColumn width='150' dataField='totalStrikes'>Total Strikes</TableHeaderColumn>
          </BootstrapTable>
          <ModalAddPlayer selectTeamId={this.state.selectTeamId} />
      </div>
      ))}

      <ModalAddTeam/>
    </div>
    );
  }
}


// insertRow={ true } options={ options } deleteRow={ true } selectRow={ selectRowProp }