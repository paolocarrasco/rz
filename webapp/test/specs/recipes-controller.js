/* globals RecipesController: true */
describe('RecipesController', function(){
    'use strict';
    var recipesController, recipesView, recipesContainer;
            
    beforeEach(function() {
        recipesContainer = {
            recipes: [],
            fetch: function(callback) {
                this.recipes = [
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