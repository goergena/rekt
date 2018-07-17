import React from 'react';
import { connect } from 'react-redux';
import { setFilterId } from '../actions/setList';

//right now these are just list item things but it would be good for them to be cards
//or something prettier
///and then each one will link to league:leagueid or something. set up react router in app.js

const LeagueItem = ( { name, id, dispatch}) => (
    <div>
        <p>{amount} - {createdAt}</p>
        <button className='btn btn-primary' onClick={() => {
            dispatch(setFilterId({ id }));
        }}>{name}</button>
    </div>
)




export default connect()(LeagueItem);