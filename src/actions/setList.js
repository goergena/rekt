
export const setCurrentList= (currentList) => ({
    type: 'SET_CURRENT_LIST',
    currentList
  });

    
  export const setSportId= (sportId) => ({
    type: 'SET_SPORT_ID',
    sportId
  });

  export const setTownId= (townId) => ({
    type: 'SET_TOWN_ID',
    townId
  });

  export const setTownsportId= (tsId) => ({
    type: 'SET_TOWNSPORT_ID',
    tsId
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