describe('RecipeView', function () {
    'use strict';
    var recipeView, recipeListElement = document.createElement('section');

    beforeEach(function () {
        var recipeContainer = new RecipeContainer();
        var recipes = [
            {
                name: "arroz con pollo",
                description: "comida criolla de arroz y pollo",
            },
            {
                name: "aji de gallina",
                description: "comida criolla de arroz y pollo",
            }
        ];
        recipeContainer.addRecipes(recipes);
        recipeView = new RecipeView(
            {
                element: recipeListElement, 
                recipeContainer: recipeContainer
            });
    });
    
    describe('#bind', function() {
        it('should bind the recipes properties with the template', function () {
            recipeListElement.children.should.have.length(0);
            recipeView.bind();
            recipeListElement.children.should.have.length(2);
            recipeListElement.querySelector('.name').innerHTML.should.match(/arroz con pollo/);
        });
    });
});