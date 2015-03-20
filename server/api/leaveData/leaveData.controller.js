'use strict';

var _ = require('lodash');
var LeaveData = require('./leaveData.model');

// Get list of leaveDatas
exports.index = function(req, res) {
  LeaveData.find(function (err, leaveDatas) {
    if(err) { return handleError(res, err); }
    return res.json(200, leaveDatas);
  });
};

// Get a single leaveData
exports.show = function(req, res) {
  LeaveData.findById(req.params.id, function (err, leaveData) {
    if(err) { return handleError(res, err); }
    if(!leaveData) { return res.send(404); }
    return res.json(leaveData);
  });
};

// Creates a new leaveData in the DB.
exports.create = function(req, res) {
  LeaveData.create(req.body, function(err, leaveData) {
    if(err) { return handleError(res, err); }
    return res.json(201, leaveData);
  });
};

// Updates an existing leaveData in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  LeaveData.findById(req.params.id, function (err, leaveData) {
    if (err) { return handleError(res, err); }
    if(!leaveData) { return res.send(404); }
    var updated = _.merge(leaveData, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, leaveData);
    });
  });
};

// Deletes a leaveData from the DB.
exports.destroy = function(req, res) {
  LeaveData.findById(req.params.id, function (err, leaveData) {
    if(err) { return handleError(res, err); }
    if(!leaveData) { return res.send(404); }
    leaveData.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}