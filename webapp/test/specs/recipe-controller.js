describe('RecipeController', function(){
    'use strict';
    var recipeController, recipeView, recipeContainer;
    var ajax;
            
    beforeEach(function() {
        recipeContainer = new RecipeContainer();
        recipeView = {
            bound: false,
            bind: function(recipes) {
                this.bound = recipeContainer.recipes.length > 0;
            }
        };
        recipeController = new RecipeController(
            {recipeContainer: recipeContainer, recipeView: recipeView});
        ajax = $.getJSON;
        $.getJSON = function(params) {
            var data = {recipes: [
                        {
                            "name": "carapulcra",
                            "description": "Plato típico de Ica",
                            "imageUrl": "http://comidas.org/carapulcra-de-cerdo.jpg",
                        }
                    ]
                };
            params.success(data);
        };
    });

    describe('#loadRecipes', function() {
        it('should retrieve recipes', function() {
            recipeController.loadRecipes();
            recipeContainer.recipes.should.have.length(1);
            recipeView.bound.should.be.truthy;
        });
    });
    
    afterEach(function() {
        $.getJSON = ajax;
    });
});