const db = require("../models");

// Defining methods for the postsController
module.exports = {
    // findAll
    findAll: function (req, res) {
        db.codeForum
            .find(req.query)
            //posts in descending order
            .sort({ date: -1 })
            .then(db => res.json(db))
            .catch(err => res.status(422).json(err));
    },
    // findByID
    findById: function(req, res) {
        db.codeForum
          .findById(req.params.id)
          .then(db => res.json(db))
          .catch(err => res.status(422).json(err));
      },
    //create
    create: function (req, res) {
        db.codeForum
            .create(req.body)
            .then(db => res.json(db))
            .catch(err => res.status(422).json(err));
    },
    //remove
    remove: function (req, res) {
        db.codeForum
            .findById({ _id: req.params.id })
            .then(db => db.remove())
            .then(db => res.json(db))
            .catch(err => res.status(422).json(err));
    }
    //update will be added in future. 

}