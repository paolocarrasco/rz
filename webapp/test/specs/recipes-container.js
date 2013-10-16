/* global RecipesContainer: true */
describe('RecipesContainer', function() {
    "use strict";
    
    var recipesContainer, recipesRepository;
    
    beforeEach(function () {
        recipesRepository = {};
        recipesRepository.list = function(callback) {
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
            callback(recipes);
        };
        recipesContainer = new RecipesContainer(recipesRepository);
    });
    
    it('should start with zero recipes', function () {
        recipesContainer.recipes.should.have.length(0);
    });
    
    describe('#fetch(callback)', function(){
        
        it('should load the given recipes from the repository', function (done) {
            recipesContainer.fetch(function() {
                recipesContainer.recipes.should.have.length(2);
                done();
            });
        });
        
    });
        
});