import axios from "axios";

export default {
  // Moved from BowlingPage.js

  getAllSports: function() {
    return axios.get('/api/sports');
  },

  getAllTowns: function() {
    return axios.get('/api/towns');
  },

 // getTownsWhereSport

 //getSportsWhereTown

 //getLeagues based on townsportId that gets passed in
 getLeagues: function(townSportId) {
     return axios.get(`/api/leagues/${townSportId}`)
 },


//get teams based on leagueid that gets passed in

getTeams: function(leagueId) {
    return axios.get(`/api/teams/${leagueId}`)

}

}