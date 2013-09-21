var should = chai.should();
describe('recipeContainer', function() {
    "use strict";
    var recipeContainer;
    beforeEach(function () {
        recipeContainer = new RecipeContainer();
    });
    
    describe('when recipes have been added', function(){
            
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
        
        it('should start with zero recipes', function () {
            recipeContainer.recipes.should.have.length(0);
        });
        
        it('should contain the added recipes', function () {
            recipeContainer.addRecipes(recipes);
            recipeContainer.recipes.should.have.length(2);
        });
        
    });
        
});