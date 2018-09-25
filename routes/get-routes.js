
var db = require("../models");
const router = require("express").Router();


router.get('/api/teams/', (req, res) => {
  db.Teams.findAll({
    include: [db.Players]
  }).then(function (dbSportRes) {
    res.json(dbSportRes);
  });
});


router.post('/api/players/', (req, res) => {
  db.Players.create(req.body).then(function (dbPlayer) {
    res.json(dbPlayer);
  });
});

router.post('/api/teams', (req, res) => {
  db.Teams.create(req.body).then(function (dbTeam) {
    res.json(dbTeam);
  });
});


module.exports = router;