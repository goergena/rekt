import axios from "axios";

export default {
  // Moved from BowlingPage.js

  getAllSports: function () {
    return axios.get('/api/sports');
  },

  getBowling: function () {
    return axios.get('/api/sports/bowling');
  },

  // Moved from BowlingPage.js
  getLeagueList: function () {
    return axios.get('api/townsports/1');
  },

  getLeagueListBetter: function (tsId) {
    return axios.get('api/leagues/' + tsId);
  },

  getTeamList: function (leagueId) {
    return axios.get('api/teams/' + leagueId);
  },

  getSportsByTown: function (townId) {
    return axios.get('api/sportsintown/' + townId);
  },

  getPlayers: function (teamId) {
    return axios.get(`api/players/${teamId}`);
  }
};


//getTownsWhereSport