const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  signUp: (req, res) => {
    db.Host.find({
      email: req.body.email,
    })
      .exec()
      .then((hosts) => {
        if (hosts.length) {
          res.status(409).json({
            message: 'email already exists',
            hosts: hosts,
          });
        } else {
          bcrypt
            .hash(req.body.password, 10)
            .then((hash) => {
              let host = new db.Host({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
              });
              host.save((err) => {
                let message = {
                  message: `You signed up ${req.body.firstName} ${req.body.lastName} !!!`,
                };
                jwt.sign(
                  message,
                  'slauson',
                  {
                    expiresIn: '1h',
                  },
                  (err, signedJwt) => {
                    if (err) {
                      res.json(err);
                    } else {
                      res.status(200).json({
                        message: message,
                        signedJwt,
                      });
                    }
                  }
                );
              });
            })
            .catch((err) => {
              if (err) {
                res.json(err);
              }
            });
        }
      });
  },
  login: (req, res) => {
    db.Host.find({
      email: req.body.email,
    })
      .select('+password')
      .exec()
      .then((hosts) => {
        if (hosts.length < 1) {
          return res.status(401).json({
            message: 'Email/Password incorrect',
          });
        }
        bcrypt.compare(req.body.password, hosts[0].password, (err, match) => {
          if (err) {
            return res.status(500).json({
              err,
            });
          }
          if (match) {
            let hostInfo = { email: req.body.email };
            jwt.sign(
              hostInfo,
              'slauson',
              {
                expiresIn: '1h',
              },
              (err, signedJwt) => {
                res.status(200).json({
                  message: 'Auth successful',
                  hostInfo,
                  signedJwt,
                });
              }
            );
          } else {
            res.status(401).json({
              message: 'Email/Password incorrect',
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          err,
        });
      });
  },
  findAllHosts: (req, res) => {
    db.Host.find({}, (err, hosts) => {
      res.json({ hosts });
    });
  },
  findHostById: (req, res) => {
    db.Host.findById(req.params.id, (err, host) => {
      res.json({ host });
    });
  },
  postHost: (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      let host = new db.Host({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
      });
      host.save((err, newHost) => {
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        res.json({
          name: `${firstName}  ${lastName}`,
          message: 'new host created!!!!!',
        });
      });
    });
  },
  deleteHost: (req, res) => {
    db.Host.findByIdAndRemove(req.params.id, (err, deletedHost) => {
      res.json(deletedHost);
    });
  },
  updateHost: (req, res) => {
    db.Host.findByIdAndUpdate(req.params.id, req.body, (err, updatedHost) => {
      res.json(updatedHost);
    });
  },
};
