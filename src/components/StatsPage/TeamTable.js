import React from 'react'

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
let teamdata = [ 
    {
    player: 'Dustin',
    handicap: 0,
    average: 300,
    bestScore: 300,
    totalStrikes: 1300
}, {
    player: 'Sean',
    handicap: 150,
    average: 69,
    bestScore: 85,
    totalStrikes: 3
}, {
    player: 'Handsome Mike',
    handicap: 20,
    average: 150,
    bestScore: 199,
    totalStrikes: 176
}] 

let teamdata2 = [{
    player: 'Blake',
    handicap: 150,
    average: 6,
    bestScore: 7,
    totalStrikes: 0
}, {
    player: 'Balogna Brad',
    handicap: 77,
    average: 73,
    bestScore: 96,
    totalStrikes: 18
}, {
    player: 'Tattoo Tim',
    handicap: 50,
    average: 90,
    bestScore: 121,
    totalStrikes: 27
}] 

export default class TeamTable extends React.Component {
  render() {
    return (
    <div>
    <h1>Team Dustin</h1>
      <BootstrapTable data={ teamdata }>
        <TableHeaderColumn width='150' dataField='player' isKey>Player</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='handicap'>Handicap</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='average'>Average</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='bestScore'>Best Score</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='totalStrikes'>Total Strikes</TableHeaderColumn>
      </BootstrapTable>
      <h1>Team Blake</h1>
      <BootstrapTable data={ teamdata2 }>
        <TableHeaderColumn width='150' dataField='player' isKey>Player</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='handicap'>Handicap</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='average'>Average</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='bestScore'>Best Score</TableHeaderColumn>
        <TableHeaderColumn width='150' dataField='totalStrikes'>Total Strikes</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}
