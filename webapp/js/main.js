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
            }),
            recipesRouter = new RecipesRouter(window, location);
            recipesRouter.onSelected(function (label) {
                console.log(label);
            });
            recipesController.loadRecipes();
    });
})(jQuery);