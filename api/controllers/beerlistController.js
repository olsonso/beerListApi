'use strict';

var mongoose = require('mongoose'),
  beer = mongoose.model('Beers');

exports.list_all_beers = function(req, res) {
  beer.find({}, function(err, beer) {
    if (err)
      res.send(err);
    res.json(beer);
  });
};




exports.create_a_beer = function(req, res) {
  var new_beer = new beer(req.body);
  new_beer.save(function(err, beer) {
    if (err)
      res.send(err);
    res.json(beer);
  });
};


exports.read_a_beer = function(req, res) {
  beer.findById(req.params.beerId, function(err, beer) {
    if (err)
      res.send(err);
    res.json(beer);
  });
};


exports.update_a_beer = function(req, res) {
  beer.findOneAndUpdate({_id: req.params.beerId}, req.body, {new: true}, function(err, beer) {
    if (err)
      res.send(err);
    res.json(beer);
  });
};


exports.delete_a_beer = function(req, res) {


  beer.remove({
    _id: req.params.beerId
  }, function(err, beer) {
    if (err)
      res.send(err);
    res.json({ message: 'beer successfully deleted' });
  });
};
