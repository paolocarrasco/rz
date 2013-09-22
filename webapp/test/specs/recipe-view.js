describe('RecipeView', function () {
    'use strict';
    var recipeView, recipeListElement = document.createElement('section');

    beforeEach(function () {
       recipeView = new RecipeView(recipeListElement);
    });
    
    describe('#bind', function() {
        var recipes = [
                {
                    name: "arroz con pollo",
                    ingredients: [{
                        name: "arroz",
                        quantity: 3,
                        units: "kg"
                    }],
                    description: "comida criolla de arroz y pollo",
                    preparation: []
                },
                {
                    name: "aji de gallina",
                    ingredients: [{
                        name: "aji",
                        quantity: 2
                    }],
                    description: "comida criolla de arroz y pollo",
                    preparation: []
                }
            ];
        
        it('should bind the recipes properties with the template', function () {
            recipeView.bind(recipes);
            recipeListElement.children.should.have.length(2);
            recipeListElement.querySelector('.name').innerHTML.should.match(/arroz con pollo/);
        });
    });
});