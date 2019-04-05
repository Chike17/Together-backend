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
          if (err) {
            res.json(err);
          }
        res.json(deletedEvent);
      });
    },
    updateEvent: (req, res) => {
        db.Event.findById(req.params.id, (err, foundEvent) => {
            req.body.startTime  ===  undefined ?  console.log('no start time') : foundEvent.startTime = req.body.startTime;
            req.body.endTime  ===  undefined ? console.log('no end time'): foundEvent.endTime = req.body.endTime;
            req.body.title ===  undefined ? console.log('no title') : foundEvent.title = req.body.title;
            req.body.description  ===  undefined ? console.log('no description') : foundEvent.description = req.body.description;
            req.body.guestData  ===  undefined ? console.log('no guest data'): foundEvent.guests = req.body.guestData;
            req.body.location  ===  undefined ?  console.log('no location') : foundEvent.location = req.body.location;
            foundEvent.save((err, newFoundEvent)=>{
                res.json(newFoundEvent);
            });
        });
    }
} 
