const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  startTime: String,
  endTime: String,
  title: String,
  description: String,
  location: String,
  host: {type: mongoose.Schema.Types.ObjectId, ref: 'Host'}, 
  guests: []
});

module.exports = mongoose.model('Event', eventSchema, 'Event');