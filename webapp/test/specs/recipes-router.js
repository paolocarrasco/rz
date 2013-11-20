/* globals RecipesRouter, Backbone */
describe('RecipesRouter', function() {
    var recipesRouter, recipesView;

    beforeEach(function() {
        var _callback;
        recipesView = {
            render: function() {
                _callback && _callback();
            },
            setCallbackOnRender: function(callback) {
                _callback = callback;
            }
        };
        recipesRouter = new RecipesRouter({
            view: recipesView
        });
    });

    afterEach(function() {
        Backbone.history.stop();
    });

    describe('#navigate(root)', function() {

        it('should render the recipesView if the url is the root', function(done) {
            recipesView.setCallbackOnRender(done);
            recipesRouter.navigate('');
            Backbone.history.start({root: "/test", pushState: false});
        });

    });
});