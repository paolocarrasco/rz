(function($){
    $(function() {
        var recipesContainer = new RecipesContainer(),
            recipesView = new RecipesView({
                    recipesContainer: recipesContainer,
                    element: document.querySelector('.dishes')
                }),
            recipeController = new RecipeController({
                recipeView: recipesView,
                recipeContainer: recipesContainer
            });
            recipeController.loadRecipes();
    });
})(jQuery);