/* globals
  Backbone, jQuery, RecipesContainer,
  RecipesView, RecipesRouter */
!(function($){
  'use strict';
  $(function() {
    var recipesContainer = new RecipesContainer(),
      recipesView = new RecipesView({
        collection: recipesContainer,
        el: '.dishes'
      });
    new RecipesRouter({
        collection: recipesContainer
      });
    recipesView.on('selected', function(label) {
      Backbone.history.navigate(label);
    });
    Backbone.history.start({ pushState: false });
  });
})(jQuery);