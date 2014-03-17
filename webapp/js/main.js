!(function(module, $){
  'use strict';
  $(function() {
    var recipesContainer = new module.RecipesContainer(),
      recipesView = new module.RecipesView({
        collection: recipesContainer,
        el: '.dishes'
      });
    new module.RecipesRouter({
        collection: recipesContainer
      });

    recipesView.on('selected', function(label) {
      module.Backbone.history.navigate(label);
    });

    module.Backbone.history.start({ pushState: false });
  });
})(this, this.jQuery);