/* global Backbone, RecipesContainer, Recipe */
describe('RecipesContainer', function() {
  "use strict";

  var recipesContainer;

  beforeEach(function () {
    recipesContainer = new RecipesContainer();
  });

  it('should start with zero recipes', function () {
    recipesContainer.should.have.length(0);
  });

  describe('#fetch(callback)', function(){
    it('should load the given recipes from the datasource', function (done) {
      Backbone.sync = function(method, model, options) {
        options.success({recipes: [new Recipe(), new Recipe()]});
      };

      recipesContainer.fetch({
        success: function() {
          recipesContainer.should.have.length(2);
          done();
        }
      });
    });
  });
});