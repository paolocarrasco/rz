var RecipeController = function(params) {
    var recipeContainer = params.recipeContainer,
        recipeView = params.recipeView;
        
    this.loadRecipes = function() {
        $.getJSON('js/app/recipes.json', function(data) {
                recipeContainer.addRecipes(data.recipes);
                recipeView.bind();
        });
    };
};