import React from 'react';
import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';

const SportItem = ( { name, id, dispatch} ) => (
    <div>
        <h3>{name}</h3>
        <button onClick={() => {
            dispatch(removeExpense({ id }));
        }}>Remove</button>
    </div>
)


export default connect()(SportItem);
