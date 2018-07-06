
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

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});

