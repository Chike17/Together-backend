db = require('../models');
jwt = require('jsonwebtoken');

module.exports = {
    findAllEvents: (req, res) =>{
       db.Event.find({}, (err, events) =>{
         res.json(events);
       })
    },
    findEventById: (req, res) => {
        db.Event.findById(req.params.id, (err, event) =>{
            res.json(event);
        }); 
    },
    postEvent: (req, res) => {
        let guestData = req.body.guestData;       
        let event = new db.Event({
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            host: req.params.hostId, 
            guests: guestData
        });
        event.save((err, newEvent) => {
            if (err) {
                res.json(err);
            } else {
                res.json(newEvent);
            }
        });
    },
    deleteEvent: (req, res) => {
      db.Event.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
        res.json(deletedEvent);
      })
    },
    updateEvent: (req, res) => {
        let dish1 = req.body.dish1;
        let dish2 = req.body.dish2;
        let dish3 = req.body.dish3;
        req.body.dishes = [dish1, dish2, dish3];
        db.Event.findByIdAndUpdate(req.params.id, req.body, (err, updatedEvent) => {
            res.json(updatedEvent);
        })
    }
} 
