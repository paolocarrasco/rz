!(function (module) {
  'use strict';
  var _collection;
  var RecipesRouter = module.Backbone.Router.extend({
    initialize: function(options) {
      _collection = options.collection;
    },
    routes: {
      'items': 'index'
    },
    index: function() {
      _collection.fetch();
    }
  });
  module.RecipesRouter = RecipesRouter;
})(this);