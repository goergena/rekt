import axios from "axios";

export default {
  // Moved from BowlingPage.js

  getAllSports: function() {
    return axios.get('/api/sports');
  },

  getBowling: function() {
      return axios.get('/api/sports/bowling');
  },
  // Moved from BowlingPage.js
  getLeagueList: function() {
      return axios.get('api/townsports/1');
  }
};

//getTownsWhereSport