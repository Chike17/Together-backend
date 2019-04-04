db = require('../models');
jwt = require('jsonwebtoken');

module.exports = {
    findAllGuests: (req, res) =>{
       db.Guest.find({}, (err, guests) =>{
         res.json({guests});
       })
    },
    findGuestById: (req, res) => {
        db.Guest.findById(req.params.id, (err, guest) =>{
            res.json(guest);
        }); 
    },
    postGuest: (req, res) => {
        let guest = new db.Guest({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        });
        let dishes = [];
        // make sure to trim
        let dish1 = req.body.dish1;
        let dish2 = req.body.dish2;
        let dish3 = req.body.dish3;
       
        dishes.push(dish1, dish2, dish3);
        for (let i = 0; i < dishes.length; i++ ) {
            guest.dishes.push(dishes[i]);
        }
        guest.save((err, newGuest) => {
          res.json(newGuest);
        });
    },
    deleteGuest: (req, res) => {
      db.Guest.findByIdAndRemove(req.params.id, (err, deletedGuest) => {
        res.json(deletedGuest);
      })
    },
    updateGuest: (req, res) => {
        let dish1 = req.body.dish1;
        let dish2 = req.body.dish2;
        let dish3 = req.body.dish3;
        req.body.dishes = [dish1, dish2, dish3];
        db.Guest.findByIdAndUpdate(req.params.id, req.body, (err, updatedGuest) => {
            res.json(updatedGuest);
        })
    }
} 
