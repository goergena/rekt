import axios from "axios";

export default {

  getTeamList: function () {
    return axios.get('api/teams/');
  },

  postPlayer: function (req) {
    return axios.post(`api/players/`, req);
  },

  postTeam: function (req) {
    return axios.post(`api/teams/`, req);
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


