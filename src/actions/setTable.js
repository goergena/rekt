
export const selectLeague= (leagueId) => ({
    type: 'SELECT_LEAGUE',
    leagueId
    
  });

    
  export const setTeams= (teams) => ({
    type: 'SET_TEAMS',
    teams
  });

  export const fillTable= (players, bowlingStats, games) => ({
    type: 'FILL_TABLE',
    players, bowlingStats, games
  });