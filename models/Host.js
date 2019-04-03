const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  events: []
});

module.exports = mongoose.model('Host', hostSchema, 'Host');