(function($){
    $(function() {
        var recipeContainer = new RecipesContainer(),
            recipeView = new RecipeView({
                    recipeContainer: recipeContainer,
                    element: document.querySelector('.dishes')
                }),
            recipeController = new RecipeController({
                recipeView: recipeView,
                recipeContainer: recipeContainer
            });
            recipeController.loadRecipes();
    });
})(jQuery);