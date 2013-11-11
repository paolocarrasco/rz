/* globals RecipesController: true */
describe('RecipesController', function(){
    'use strict';
    var recipesController, recipesView, recipesContainer;
            
    beforeEach(function() {
        var _recipes;
        recipesContainer = {
            recipes: function() {
                return _recipes;
            },
            fetch: function(callback) {
                _recipes = [
                        { name: "carapulcra" }, { name: "rocoto relleno" }
                    ];
                callback();
            }
        };
        recipesView = {
            bind: function(recipes) {
                this.recipes = recipes;
            },
            recipes: []
        };
        recipesController = new RecipesController({
            recipesContainer: recipesContainer,
            recipesView: recipesView
        });
    });

    describe('#loadRecipes()', function() {
        it('should pass the recipes from the container to the view', function() {
            recipesController.loadRecipes();
            recipesView.recipes.should.have.length(2);
        });
    });
    
});