db = require('../models');
jwt = require('jsonwebtoken');

module.exports = {
    findAllHosts: (req, res) =>{
       db.Host.find({}, (err, hosts) =>{
         res.json({hosts});
       })
    },
} 