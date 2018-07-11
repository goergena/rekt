
const express = require("express");
const bodyParser = require("body-parser");

// const routes = require("./routes");
var db = require("./models");


const app = express();
const PORT = process.env.PORT || 8100;


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express Yeall' });
});

app.get('/api/sports', (req, res) => {
  db.Sports.findAll({
  }).then(function (dbSportRes) {
    res.json(dbSportRes);
    console.log(dbSportRes);
  });
});

app.get('/api/sports/:sport', (req, res) => {
  db.Sports.findOne({
    where: 
    {sport: req.params.sport},
    include: [db.Towns]
  }).then(function (dbSportRes) {
    res.json(dbSportRes);
    console.log(dbSportRes);
  });
});

app.get('/api/towns', (req, res) => {
  db.Towns.findAll({
   include: [db.Sports]
   
  }).then(function (dbSportRes) {
    res.json(dbSportRes);
    console.log(dbSportRes);
  });
});



// app.get('/api/townsports/:id', (req, res) => {
//   db.TownSports.findOne({
//     where: 
//     {id: req.params.id},
//     include: [db.Leagues]
//   }).then(function (dbSportRes) {
//     res.json(dbSportRes);
//     console.log(dbSportRes);
//   });
// });

app.get('/api/townsports/:sportId', (req, res) => {
  db.TownSports.findAll({
    where: 
    {sportId: req.params.sportId},
    include: [db.Leagues]
  }).then(function (dbSportRes) {
    res.json(dbSportRes);
    console.log(dbSportRes);
  });
});

// app.get('/api/leagues/:townsportid', (req, res) => {
//   db.Leagues.findAll({
//      where: 
//     {TownSportId: req.params.townsportid},
 
//   }).then(function (dbSportRes) {
//     res.json(dbSportRes);
//     console.log(dbSportRes);
//   });
// });



app.get('/api/teams/:leagueId', (req, res) => {
  db.Teams.findAll({
    where: 
    {LeagueId: req.params.leagueId},
    include: [db.Players]
  }).then(function (dbSportRes) {
    res.json(dbSportRes);
    console.log(dbSportRes);
  });
});

//this definitely works, but we're going to try to write a query below
// app.get('/api/leagues/:id', (req, res) => {
//   db.Leagues.findOne({
//     where: 
//     {id: req.params.id},
//     include: [db.Teams]
//   }).then(function (dbSportRes) {
//     res.json(dbSportRes);
//     console.log(dbSportRes);
//   });
// });





// Require models for syncing


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Start the API server

db.sequelize.sync( { force: true } ).then(function () {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});

