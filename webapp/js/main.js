(function($){
    $(function() {
        var recipesRepository = new RecipesRepository('js/app/recipes.json', $),
            recipesContainer = new RecipesContainer([], {
                repository: recipesRepository
            }),
            recipesView = new RecipesView(document.querySelector('.dishes')),
            recipesController = new RecipesController({
                recipesView: recipesView,
                recipesContainer: recipesContainer
            }),
            recipesRouter = new RecipesRouter(window, location);
        recipesRouter.onSelected(function (label) {
            console.log(label);
        });
        recipesController.loadRecipes();
    });
})(jQuery);