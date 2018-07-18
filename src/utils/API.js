import axios from "axios";

export default {

  getTeamList: function () {
    return axios.get('api/teams/');
  },

  getPlayers: function (teamId) {
    return axios.get(`api/players/${teamId}`);
  },

  // getAllSports: function () {
  //   return axios.get('/api/sports');
  // },

  // getBowling: function () {
  //   return axios.get('/api/sports/bowling');
  // },


  // getLeagueList: function (tsId) {
  //   return axios.get('api/leagues/' + tsId);
  // },
};


