import React from 'react';
import { connect } from 'react-redux';
// import ExpenseListItem from './ExpenseListItem';
// import currentList from '../selectors/expenses';
//import LeagueItem

//so the goal is to import current list here (which should be full of a leagueList)
//and to map over currentList rendering <LeagueItem> for each one

const ExpenseList = (props) => (
    <div>
      <h1>Expense List</h1>
      {/* {props.filters.text}
      {props.expenses.length} */}

      {props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />
      })}
    </div>
);

//as state changes, we see this change
const mapStateToProps = (state) => {
    return {
    //   expenses: state.expenses,
    //   filters: state.filters
    expenses: selectExpenses(state.expenses, state.filters)
    }
   }

export default  connect(mapStateToProps)(ExpenseList);

