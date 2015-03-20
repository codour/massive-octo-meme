'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LeaveDataSchema = new Schema({
  /*name: String,
  info: String,
  active: Boolean*/
  dateFrom: String,
  dateTo: String,
  timeFrom: String,
  timeTo: String,
  username: String,
  approved: Boolean,

});

module.exports = mongoose.model('LeaveData', LeaveDataSchema);
