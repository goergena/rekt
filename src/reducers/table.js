

const tableReducerDefaultState = {
    leagueId: 1,
    teams: [] 
  }
  
  export default (state = tableReducerDefaultState, action) => {
    switch (action.type) {
      case 'SELECT_LEAGUE':
      return {
        ...state,
        leagueId: action.leagueId
      };
      case 'SET_TEAMS':
      return {
        ...state,
       teams: action.teams
      };
  
      default:
        return state;
    }
  };
  
