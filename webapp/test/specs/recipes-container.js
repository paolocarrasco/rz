describe('RecipeContainer', function() {
    "use strict";
    
    var recipeContainer;
    beforeEach(function () {
        recipeContainer = new RecipeContainer();
    });
    
    it('should start with zero recipes', function () {
        recipeContainer.recipes.should.have.length(0);
    });
    
    describe('#addRecipes', function(){
        
        var recipes = [
                {
                    name: "arroz con pollo",
                    ingredients: [{
                        name: "arroz"
                    }],
                    description: "comida criolla de arroz y pollo",
                },
                {
                    name: "aji de gallina",
                    ingredients: [{
                        name: "aji",
                        quantity: 2
                    }],
                    description: "comida criolla de arroz y pollo",
                }
            ];
        
        it('should add the given recipes', function () {
            recipeContainer.addRecipes(recipes);
            recipeContainer.recipes.should.have.length(2);
        });
        
    });
        
});