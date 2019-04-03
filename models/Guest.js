const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  dishes: [],
});

module.exports = mongoose.model('Guest', guestSchema, 'Guest');