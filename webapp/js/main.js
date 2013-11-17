!(function($){
    $(function() {
        var recipesContainer = new RecipesContainer(),
            recipesView = new RecipesView({
                el: '.dishes'
            });
        recipesView.collection = recipesContainer;
        recipesContainer.fetch({
            success: function() {
                recipesView.render();
            }
        });
    });
})(jQuery);