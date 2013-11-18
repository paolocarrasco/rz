!(function($){
    $(function() {
        var recipesContainer = new RecipesContainer(),
            recipesView = new RecipesView({
                collection: recipesContainer,
                el: '.dishes'
            });
        recipesContainer.fetch();
    });
})(jQuery);