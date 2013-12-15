/* globals RecipesRouter, Backbone */
describe('RecipesRouter', function() {

  'use strict';

  var recipesRouter, recipesContainer;

  beforeEach(function() {
    var _callbackFetch, _callbackSelect;
    recipesContainer = {
      fetch: function() {
        _callbackFetch && _callbackFetch();
      },
      select: function() {
        _callbackSelect && _callbackSelect();
      },
      setCallbackOnFetch: function(callback) {
        _callbackFetch = callback;
      },
      setCallbackOnSelect: function(callback) {
        _callbackSelect = callback;
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

  describe('#navigate(path)', function() {

    it('should fetch the recipes when the url is the root', function(done) {
      recipesContainer.setCallbackOnFetch(done);
      recipesRouter.navigate('/somewhere-else', { trigger: true });
      recipesRouter.navigate('/', { trigger: true });
    });

    it('should fetch the recipes when the url is \'recipes\'', function(done) {
      recipesContainer.setCallbackOnFetch(done);
      recipesRouter.navigate('/recipes', { trigger: true });
    });

    it('should select the recipe when the url is a recipe', function(done) {
      recipesContainer.setCallbackOnSelect(done);
      recipesRouter.navigate('/recipes/some-recipe', { trigger: true });
    });

  });
});