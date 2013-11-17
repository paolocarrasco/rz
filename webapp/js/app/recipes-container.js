!(function(module) {
  'use strict';
  var RecipesContainer = module.Backbone.Collection.extend({
    model: module.Recipe,
    url: 'js/app/recipes.json',
    parse: function(data) {
      return data.recipes;
    }
  });
  module.RecipesContainer = RecipesContainer;
})(this);
