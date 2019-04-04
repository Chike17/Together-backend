const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hostSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  events: [],
  password: { type: String, required: true , select: false}
});

module.exports = mongoose.model('Host', hostSchema);