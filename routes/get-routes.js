var db = require("../models");
//const Op = db.Sequelize.Op;


module.exports = function (app) {

    app.get("/api/bowling/:town", function(req, res) {
        db.Sports.findOne({
          where: {
            town: req.params.town
          },
          include: [db.Leagues]
        }).then(function(dbResp) {
          res.json(dbResp);
        });
      });



};