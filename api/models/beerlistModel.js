'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BeerSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of a beer youd like to add'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Location: {
    type: [{
      type: String,
      enum: ['SW', 'SE', 'NW', 'NE', 'Portland']
    }],
    default: ['Portland']
  }
});

module.exports = mongoose.model('Beers', BeerSchema);
