const Host = require('./models/Host');
const Guest = require('./models/Guest');
const Event = require('./models/Event');

const mongoose = require('mongoose');
let db = mongoose.connection;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/together", {
  useNewUrlParser: true
});

db.once('open', ()=>{
    console.log('database is now open');
 });

let seed =
        {
         host: { firstName: 'some host name', 
                 lastName: 'some last name',
                 email: 'some email',
                 password:'gibberish' },
         event: { startTime: 'some start time', 
                  endTime: 'some end time', 
                  title: 'some title',
                  description: 'some description', 
                  location: 'some location'},
         guest: { firstName: 'some guest name',
                  lastName: 'some last name', 
                  email: 'some email',
                  dishes: ['dish 1', 'dish 2', 'dish 3']}
        };

let seeds = [seed, seed, seed, seed, seed, seed,
             seed,seed, seed, seed, seed, seed,
             seed, seed, seed, seed, seed, seed];

Guest.deleteMany({}, (err, guests)=>{
    Host.deleteMany({}, (err, hosts)=>{
        Event.deleteMany({}, (err, events)=> {
            for(let i = 0; i < seeds.length; i++){
                let oneSeed = seeds[i];
                let guest = new Guest ({
                    firstName: oneSeed.guest.firstName,
                    lastName: oneSeed.guest.lastName,
                    email: oneSeed.guest.email,
                 });
                dishes = oneSeed.guest.dishes;
                guest.dishes = dishes;
                guest.save((err, newGuest) => {
                    let event = new Event({
                        startTime: oneSeed.event.startTime,
                        endTime: oneSeed.event.endTime,
                        title: oneSeed.event.title,
                        description: oneSeed.event.description,
                        location: oneSeed.event.location,
                    });
        
                    event.guests.push(newGuest, newGuest, newGuest, newGuest, newGuest);
                    event.save((err, newEvent)=>{
                        let host = new Host({
                            firstName: oneSeed.host.firstName,
                            lastName: oneSeed.host.lastName,
                            email: oneSeed.host.email,
                            password: oneSeed.host.password
                        });
                        newEvent.host = host._id;
                        host.events.push(newEvent, newEvent, newEvent, newEvent, newEvent);
                        host.save();
                    });
                });
            }
        });
    });
}); 