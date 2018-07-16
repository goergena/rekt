
export const setCurrentList= (currentList) => ({
    type: 'SET_CURRENT_LIST',
    currentList
  });

    
  export const setFilterId= (filterId) => ({
    type: 'SET_FILTER_ID',
    filterId
  });


// //
// export const setSportList= ({ sportList } = {}) => ({
//   type: 'SET_SPORT_LIST',
//   sportList
// });

// export const setTownList= ({ townList } = {}) => ({
//     type: 'SET_TOWN_LIST',
//     townList
//   });

//   export const setLeagueList= ({ leagueList } = {}) => ({
//     type: 'SET_LEAGUE_LIST',
//     leagueList
//   });

//   export const setTeamList= ({ teamList } = {}) => ({
//     type: 'SET_TEAM_LIST',
//     teamList
//   });


  //but we also need to be able to base the selected list on one id higher
  //ex get team list where leagueId=1 then call setTeamList with teamList