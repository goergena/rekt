const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/get-routes");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8300;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

// Add routes, both API and view
// app.use(routes);

// Add a route that points to our index.html for react-router to handle it

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Start the API server

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// db.sequelize.sync( { force: true } ).then(function () {
//   app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
// });

