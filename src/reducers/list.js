

const listReducerDefaultState = {
  currentList: [],
  townId: 1,
  sportId: 1,
  tsId: 1

}

export default (state = listReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_LIST':
    return {
      ...state,
      currentList: action.currentList
    };
    case 'SET_SPORT_ID':
    return {
      ...state,
      sportId: action.sportId
    };

    case 'SET_TOWN_ID':
    return {
      ...state,
      townId: action.townId
    };

    case 'SET_TOWNSPORT_ID':
    return {
      ...state,
      tsId: action.tsId
    };

    default:
      return state;
  }
};


// honestly shouldnt it just be list default state?
// and like setList based on what list you pass in?
//we don't need more than one list in the state at a time
//... well, until we do. 

// eventually we will need teamlist with playerlist and gamelist and playerstatslist all in the state at once.
//but that could be a separate reducer.
//in this reducer, it could just be one list with one filter id (then we wouldnt need separate actions/selectId and actions/setList  OR all these damn cases in this file. lets try it out.)



// const listReducerDefaultState = {
//   townList: [],
//   sportList: [],
//   leagueList: [],
//   teamList: [],

// }

// export default (state = listReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TOWN_LIST':
//     return {
//       ...state,
//       townList: action.townList
//     };
//     case 'SET_SPORT_LIST':
//     return {
//       ...state,
//       sportList: action.sportList
//     };
//     case 'SET_LEAGUE_LIST':
//     return {
//       ...state,
//       leagueList: action.leagueList
//     };

//     case 'SET_TEAM_LIST':
//     return {
//       ...state,
//       teamList: action.teamList
//     };

//     default:
//       return state;
//   }
// };