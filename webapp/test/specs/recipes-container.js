/* global Backbone, RecipesContainer, Recipe */
describe('RecipesContainer', function() {
  'use strict';

  var recipesContainer;

  beforeEach(function () {
    recipesContainer = new RecipesContainer();
    Backbone.sync = function(method, model, options) {
      var recipeList = [
          new Recipe({
            label: 'papa-rellena',
            name: 'papa rellena'
          }),
          new Recipe({
            label: 'causa-rellena',
            name: 'causa rellena'
          })
        ];
      options.success({
        recipes: recipeList
      });
    };
  });

  it('should start with zero recipes', function () {
    recipesContainer.should.have.length(0);
  });

  describe('#fetch(callback)', function(){
    it('should load the given recipes from the datasource', function (done) {
      recipesContainer.fetch({
        success: function() {
          recipesContainer.should.have.length(2);
          done();
        }
      });
    });
  });

  describe('#select(recipe)', function() {
    it('should change the status of the selected recipe', function(done) {
      var recipeLabel ='causa-rellena';
      recipesContainer.fetch({
        success: function() {
          recipesContainer.select(recipeLabel);
          var selectedRecipe = recipesContainer.findWhere({label: recipeLabel});
          selectedRecipe.selected.should.be.ok;
          done();
        }
      });
    });
  });
});