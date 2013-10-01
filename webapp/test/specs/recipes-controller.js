describe('RecipesController', function(){
    'use strict';
    var recipesController, recipesView, recipesContainer;
    var ajax;
            
    beforeEach(function() {
        recipesContainer = new RecipesContainer();
        recipesView = {
            bound: false,
            bind: function(recipes) {
                this.bound = recipesContainer.recipes.length > 0;
            }
        };
        recipesController = new RecipesController(
            {recipesContainer: recipesContainer, recipesView: recipesView});
        ajax = $.getJSON;
        $.getJSON = function(url, success) {
            var data = {recipes: [
                        {
                            "name": "carapulcra",
                            "description": "Plato típico de Ica",
                            "imageUrl": "http://comidas.org/carapulcra-de-cerdo.jpg",
                        }
                    ]
                };
            success(data);
        };
    });

    describe('#loadRecipes', function() {
        it('should retrieve recipes', function() {
            recipesController.loadRecipes();
            recipesContainer.recipes.should.have.length(1);
            recipesView.bound.should.be.truthy;
        });
    });
    
    afterEach(function() {
        $.getJSON = ajax;
    });
});