!(function(module) {
  'use strict';
  var RecipesContainer = module.Backbone.Collection.extend({

    model: module.Recipe,

    url: 'js/app/recipes.json',

    parse: function(data) {
      return data.recipes;
    },

    select: function(recipeLabel) {
      var recipeFound = this.findWhere({label: recipeLabel});
      recipeFound.selected = true;
    }

  });
  module.RecipesContainer = RecipesContainer;
})(this);
