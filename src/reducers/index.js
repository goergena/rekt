import { combineReducers } from 'redux'
import setListReducer from './list'

export default combineReducers({
  list: setListReducer
})
