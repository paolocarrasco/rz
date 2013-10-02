describe('RecipesView', function () {
    'use strict';
    var recipesView, recipeListElement = document.createElement('section');

    beforeEach(function () {
        var recipesContainer = new RecipesContainer();
        var recipes = [
            {
                name: "arroz con pollo",
                imageUrl: 'http://upload.wikimedia.org/wikipedia/commons/3/39/Arroz-con-Pollo.jpg',
                description: "comida criolla de arroz y pollo",
                ingredients: [{name: 'arroz'}, {name: 'pollo'}]
            },
            {
                name: "aji de gallina",
                description: "comida criolla de arroz y gallina",
                imageUrl: 'http://1.bp.blogspot.com/-PsmY86g6DIE/UKBRP1M96UI/AAAAAAAAARc/30V5dNM-axs/s1600/AJI+DE+GALLINA.jpg',
                ingredients: [{name: 'aji'}, {name: 'gallina'}]
            }
        ];
        recipesContainer.addRecipes(recipes);
        recipesView = new RecipesView(
            {
                element: recipeListElement, 
                recipesContainer: recipesContainer
            });
    });
    
    describe('#bind', function() {
        it('should bind the recipes properties with the template', function () {
            recipeListElement.children.should.have.length(0);
            recipesView.bind();
            recipeListElement.children.should.have.length(2);
            recipeListElement.querySelector('.name').innerHTML.should.match(/arroz con pollo/);
        });
        
        it('should render every ingredient of the recipe', function() {
            recipesView.bind();
            recipeListElement.children[0].querySelector('section>p').innerHTML.should.match(/arroz, pollo/);
            recipeListElement.children[1].querySelector('section>p').innerHTML.should.match(/aji, gallina/);
        });
    });
    
});