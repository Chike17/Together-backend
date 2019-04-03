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

// let seed =
//         {host: {firstName: 'some host name', lastName: 'some last name'},
//          event: {startTime: 'some start time', 
//                  endTime: 'some end time', 
//                  title: 'some title',
//                  description: 'some description', 
//                  location: 'some location'},
//          guest: {firstName: 'some guest name',
//                  lastName: 'some last name', 
//                  email: 'some email',
//                  dishes: ['dish 1', 'dish 2', 'dish 3 ']}};

// let seeds = [seed, seed, seed, seed, seed, seed,
//              seed,seed, seed, seed, seed, seed,
//              seed, seed, seed, seed, seed, seed];

// Guest.deleteMany({}, (err, guests)=>{
//     Host.deleteMany();
//     Event.deleteMany();
//     for(let i = 0; i < seeds.length; i++){
//         let oneSeed = seeds[i];

//         let guest = new Guest ({
//             firstName: oneSeed.guest.firstName,
//             lastName: oneSeed.guest.lastName,
//             email: oneSeed.guest.email,
//          });

//         dishes = oneSeed.guest.dishes;
//         guest.dishes.push(dishes[0], dishes[1], dishes[2]);
        
//         guest.save((err, newGuest) => {
//             let event = new Event({
//                 startTime: oneSeed.event.startTime,
//                 endTime: oneSeed.event.endTime,
//                 title: oneSeed.event.title,
//                 description: oneSeed.event.description,
//                 location: oneSeed.event.location,
//             });

//             event.guests.push(newGuest, newGuest, newGuest, newGuest, newGuest);

//             event.save((err, newEvent)=>{
//                 let host = new Host({
//                     firstName: oneSeed.host.firstName,
//                     lastName: oneSeed.host.lastName
//                 })
//                 newEvent.host = host._id;
//                 console.log('/////////////////////////');
//                 console.log('/////////////////////////');
//                 console.log('/////////////////////////');
//                 console.log('/////////////////////////');
//                 console.log('///////////// Event Host Id////////////');
//                 console.log(newEvent.host);
//                 console.log(newEvent.host);
//                 console.log(newEvent.host);
//                 console.log(newEvent.host);
//                 console.log(newEvent.host);
//                 console.log('/////////////////////////');
//                 console.log('/////////////////////////');
//                 console.log('/////////////////////////');
//                 console.log('/////////////////////////');
//                 console.log('/////////////////////////');
//                 host.events.push(newEvent, newEvent, newEvent, newEvent, newEvent);
//                 host.save();
//             });
//         });
//     }
    
// }); 


Guest.find({}, (err, guests)=> {
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('//////////Guests///////////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log(guests);

    Host.find({}, (err, hosts)=> {
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('///////////Hosts//////////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log(hosts);

        Event.find({}, (err, events)=> {
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('//////////Events///////////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log(events);
        });
    });
    
});








