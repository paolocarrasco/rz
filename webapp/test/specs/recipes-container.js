describe('RecipesContainer', function() {
    "use strict";
    
    var recipesContainer;
    beforeEach(function () {
        recipesContainer = new RecipesContainer();
    });
    
    it('should start with zero recipes', function () {
        recipesContainer.recipes.should.have.length(0);
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
            recipesContainer.addRecipes(recipes);
            recipesContainer.recipes.should.have.length(2);
        });
        
    });
        
});