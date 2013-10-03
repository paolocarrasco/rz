var RecipesController = function(params) {
    var recipesContainer = params.recipesContainer,
        recipesView = params.recipesView;
        
    this.loadRecipes = function() {
        recipesContainer.fetch(function() {
            recipesView.bind(recipesContainer.recipes);
        });
    };
};