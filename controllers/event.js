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
            guests: guestData,
            host: req.params.hostId
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
        let eventUpdate = {};


        db.Event.findById(req.params.id, (err, foundEvent) => {
            req.body.startTime  ===  undefined ?  eventUpdate : foundEvent.startTime = req.body.startTime;
            req.body.endTime  ===  undefined ? eventUpdate: foundEvent.endTime = req.body.endTime;
            req.body.title ===  undefined ? eventUpdate : foundEvent.title = req.body.title;
            req.body.description  ===  undefined ? eventUpdate: foundEvent.description = req.body.description;
            req.body.guestData  ===  undefined ? eventUpdate: foundEvent.guests = req.body.guestData;
            foundEvent.save((err, newFoundEvent)=>{
                res.json(newFoundEvent);
            });
        });
    }
} 
