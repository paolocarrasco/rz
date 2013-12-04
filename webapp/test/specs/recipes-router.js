/* globals RecipesRouter, Backbone */
describe('RecipesRouter', function() {

  'use strict';

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

    try {
      Backbone.history.start({root: '/test/', pushState: false});
    }
    catch(e) {
      // Backbone history should be started only once
      // if not it raises an exception (useless in tests)
    }
  });

  describe('#navigate(root)', function() {

    it('should fetch the recipes if the url is the root', function(done) {
      recipesContainer.setCallbackOnFetch(done);
      recipesRouter.navigate('/getItems', { trigger: true });
    });

  });
});