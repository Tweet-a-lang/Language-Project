const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const faker = require('faker');
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: false,
    default: 0
  },
  completedTweets: {
    type: Array,
    required:false,
    default: []
  },
  avatar: {
    type: String,
    required: false,
    default: faker.image.avatar()
  }
});

module.exports = mongoose.model('user', UserSchema);