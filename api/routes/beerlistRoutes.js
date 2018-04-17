'use strict';
module.exports = function(app) {
  var beerList = require('../controllers/beerListController');

  // beerList Routes
  app.route('/beers')
    .get(beerList.list_all_beers)
    .post(beerList.create_a_beer);


  app.route('/beers/:beersId')
    .get(beerList.read_a_beer)
    .put(beerList.update_a_beer)
    .delete(beerList.delete_a_beer);
};
