var RecipeController = function(params) {
    var recipeContainer = params.recipeContainer,
        recipeView = params.recipeView;
        
    this.loadRecipes = function() {
        $.getJSON({
            url:'js/app/recipes.json', 
            success: function(data) {
                recipeContainer.addRecipes(data.recipes);
                recipeView.bind();
            }
        })
    };
};