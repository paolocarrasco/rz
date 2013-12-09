/* globals
  Backbone, jQuery, RecipesContainer,
  RecipesView, RecipesRouter */
!(function($){
  'use strict';
  $(function() {
    var recipesContainer = new RecipesContainer();
    new RecipesRouter({
        collection: recipesContainer
      });
    new RecipesView({
      collection: recipesContainer,
      el: '.dishes'
    });
    Backbone.history.start({ pushState: false });
  });
})(jQuery);