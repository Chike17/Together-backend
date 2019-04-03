const mongoose = require('mongoose');
let db = mongoose.connection;

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/together", {
  useNewUrlParser: true
});

db.once('open', ()=>{
    console.log('database is now open');
 });

module.exports = {
                  Guest: require('./Guest'),
                  Host: require('./Host'),
                  Event: require('./Event')          
}

