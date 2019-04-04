db = require('../models');
jwt = require('jsonwebtoken');
bcrypt = require('bcrypt');

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
        bcrypt.hash(req.body.password, 10, (err, hash) =>{
            let host = new db.Host({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            });
            host.save((err, newHost) => {
            let firstName = req.body.firstName;
            let lastName = req.body.lastName;
              res.json({
                        name: `${firstName}  ${lastName}`,
                        message: 'new user created!!!!!'
                       });
            }); 
        }); 
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