var RecipesController = function(params) {
    var recipesContainer = params.recipesContainer,
        recipesView = params.recipesView;
        
    this.loadRecipes = function() {
        $.getJSON('js/app/recipes.json', function(data) {
                recipesContainer.addRecipes(data.recipes);
                recipesView.bind();
        });
    };
};