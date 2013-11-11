!(function(module) {
  'use strict';
  var _repository, _recipes;
  var RecipesContainer = module.Backbone.Collection.extend({
    model: function() {
      
    },
    initialize: function(models, options) {
      _recipes = models || [];
      _repository = options.repository;
    },

    // temporary override
    fetch : function (callback) {
      _repository.list(function(fetchedRecipes) {
        _recipes = fetchedRecipes;
        callback();
      });
    },
    recipes: function(){
      return _recipes;
    }
  });
  module.RecipesContainer = RecipesContainer;
})(this);
