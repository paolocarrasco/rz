(function($){
    $(function() {
        var recipesContainer = new RecipesContainer(),
            recipesView = new RecipesView({
                    recipesContainer: recipesContainer,
                    element: document.querySelector('.dishes')
                }),
            recipesController = new RecipesController({
                recipesView: recipesView,
                recipesContainer: recipesContainer
            });
            recipesController.loadRecipes();
    });
})(jQuery);