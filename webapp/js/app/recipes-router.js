!(function (module) {
    'use strict';
    var _view;
    var RecipesRouter = module.Backbone.Router.extend({
        initialize: function(options) {
            _view = options.view;
        },
        routes: {
            '': 'index'
        },
        index: function() {
            _view.render();
        }
    });
    module.RecipesRouter = RecipesRouter;
})(this);