!(function (module) {
  'use strict';
  var _collection;
  var RecipesRouter = module.Backbone.Router.extend({
    initialize: function(options) {
      _collection = options.collection;
    },
    routes: {
      '': 'recipeListing',
      'recipes': 'recipeListing',
      'recipes/:recipe': 'recipeSelection'
    },

    recipeListing: function() {
      _collection.fetch();
    },

    recipeSelection: function(recipeSelected) {
      _collection.select(recipeSelected);
    }
  });
  module.RecipesRouter = RecipesRouter;
})(this);