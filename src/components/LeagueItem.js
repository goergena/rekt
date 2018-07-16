import React from 'react';
import { connect } from 'react-redux';
import { setFilterId } from '../actions/setList';

//right now these are just list item things but it would be good for them to be cards
//or something prettier
const LeagueItem = ( { name, id, dispatch}) => (
    <div>
        <p>{amount} - {createdAt}</p>
        <button className='btn btn-primary' onClick={() => {
            dispatch(setFilterId({ id }));
        }}>{name}</button>
    </div>
)




export default connect()(LeagueItem);