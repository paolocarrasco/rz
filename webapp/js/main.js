/* globals
  Backbone, jQuery, RecipesContainer,
  RecipesView, RecipesRouter */
!(function($){
  'use strict';
  $(function() {
    var recipesContainer = new RecipesContainer(),
      recipesRouter = new RecipesRouter({
        collection: recipesContainer
      });
    new RecipesView({
      collection: recipesContainer,
      el: '.dishes'
    });
    Backbone.history.start({ pushState: false });
    recipesRouter.navigate('/items', { trigger: true });
  });
})(jQuery);