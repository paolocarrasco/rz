!(function($){
    $(function() {
        var recipesContainer = new RecipesContainer(),
            recipesView = new RecipesView({
                collection: recipesContainer,
                el: '.dishes'
            }),
            recipesRouter = new RecipesRouter({
                collection: recipesContainer
            });
        Backbone.history.start({ pushState: false });
        recipesRouter.navigate('/getItems', { trigger: true });
    });
})(jQuery);