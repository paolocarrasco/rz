!(function($){
    $(function() {
        var recipesContainer = new RecipesContainer(),
            recipesView = new RecipesView({
                el: '.dishes'
            }),
            recipesController = new RecipesController({
                recipesView: recipesView,
                recipesContainer: recipesContainer
            });
        recipesView.collection = recipesContainer;
        recipesContainer.fetch({
            success: function() {
                recipesView.render();
            }
        });
    });
})(jQuery);