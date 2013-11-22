/* globals RecipesRouter, Backbone */
describe('RecipesRouter', function() {
    var recipesRouter, recipesContainer;

    beforeEach(function() {
        var _callback;
        recipesContainer = {
            fetch: function() {
                _callback && _callback();
            },
            setCallbackOnFetch: function(callback) {
                _callback = callback;
            }
        };
        recipesRouter = new RecipesRouter({
            collection: recipesContainer
        });
        Backbone.history.start({root: "/test/", pushState: false});
    });

    describe('#navigate(root)', function() {

        it('should fetch the recipes with the container if the url is the root', function(done) {
            recipesContainer.setCallbackOnFetch(done);
            recipesRouter.navigate('/getItems', { trigger: true });
        });

    });
});