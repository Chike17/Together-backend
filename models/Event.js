const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    dishes: [],
  });

const eventSchema = new mongoose.Schema({
  startTime: String,
  endTime: String,
  title: String,
  description: String,
  location: String,
  host: {type: mongoose.Schema.Types.ObjectId, ref: 'Host'}, 
  guests: [guestSchema]
});

module.exports = mongoose.model('Event', eventSchema);