import React from 'react'

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

let teams = {
    teams: '' 
}

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

  export default class TeamCreation extends React.Component {
    render() {
      return (
      <div>
      <h1>Create a Team</h1>
        <BootstrapTable insertRow={ true } date ={ teams }options={ options } deleteRow={ true } selectRow={ selectRowProp }>
            <TableHeaderColumn width='150' dataField='teams' isKey>Team</TableHeaderColumn>
        </BootstrapTable>
        
        </div>
      );
    }
  }