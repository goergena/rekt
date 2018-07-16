var db = require("../models");
const express = require("express");
const bodyParser = require("body-parser");
//const Op = db.Sequelize.Op;


module.exports = function (app) {

  app.get('/api/sports', (req, res) => {
    db.Sports.findAll({
    }).then(function (dbSportRes) {
      res.json(dbSportRes);
      console.log(dbSportRes);
    });
  });
  
  //meh delete this if you dont use it
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
  
  app.get('/api/leagues/:townsportid', (req, res) => {
    db.Leagues.findAll({
       where: 
      {TownSportId: req.params.townsportid},
   
    }).then(function (dbSportRes) {
      res.json(dbSportRes);
      console.log(dbSportRes);
    });
  });
  
  
  //can we write this to include db.bowlingStats and db.games too?
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
};