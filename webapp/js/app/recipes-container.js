!(function(module) {
  'use strict';
  var RecipesContainer = module.Backbone.Collection.extend({
    model: module.Recipe,
    url: '/recipes'
  });
  module.RecipesContainer = RecipesContainer;
})(this);
