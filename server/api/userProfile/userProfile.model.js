'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserProfileSchema = new Schema({
  name: String,
  address: String,
  mobile: String,
  landLine: String,
  username: String,
  active: Boolean
});

module.exports = mongoose.model('userProfile', UserProfileSchema);
