db = require('../models');
jwt = require('jsonwebtoken');

module.exports = {
    findAllHosts: (req, res) =>{
       db.Host.find({}, (err, hosts) =>{
         res.json({hosts});
       })
    },
    findHostById: (req, res) => {
        db.Host.findById(req.params.id, (err, host) =>{
            res.json({host});
          }); 
    },
    postHost: (req, res) => {
        let host = new db.Host({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });
        host.save((err, newHost) => {
          res.json(newHost);
        })
    },
    deleteHost: (req, res) => {
      db.Host.findByIdAndRemove(req.params.id, (err, deletedHost) => {
        res.json(deletedHost);
      })
    },
    updateHost: (req, res) => {
        let update = {};
        db.Host.findByIdAndUpdate(req.params.id, req.body, (err, updatedHost) => {
            res.json(updatedHost);
        })
    }
} 