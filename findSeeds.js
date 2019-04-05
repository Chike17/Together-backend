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

Guest.find({}, (err, guests)=> {
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('//////////Guests/////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log('/////////////////////////');
    console.log(guests);

    Host.find({}, (err, hosts)=> {
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('//////////Hosts//////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log('/////////////////////////');
        console.log(hosts);

        Event.find({}, (err, events)=> {
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('//////////Events/////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log('/////////////////////////');
            console.log(events);
        });
    });
    
});







