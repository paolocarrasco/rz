/* globals RecipesView, Recipe, RecipesContainer */
describe('RecipesView', function () {
    'use strict';
    var recipesView, recipes, recipeListElement;

    before(function() {
        recipeListElement = document.createElement('section');
    });

    beforeEach(function () {
        var recipe1 = new Recipe({
                name: "arroz con pollo",
                imageUrl: 'Arroz-con-Pollo.jpg',
                description: "comida criolla de arroz y pollo",
                ingredients: [{name: 'arroz'}, {name: 'pollo'}]
            }),
            recipe2 = new Recipe({
                name: "aji de gallina",
                description: "comida criolla de arroz y gallina",
                imageUrl: 'http://1.bp.blogspot.com/-PsmY86g6DIE/UKBRP1M96UI/AAAAAAAAARc/30V5dNM-axs/s1600/AJI+DE+GALLINA.jpg',
                ingredients: [{name: 'aji'}, {name: 'gallina'}]
            });
        recipes = new RecipesContainer([recipe1, recipe2]);
        recipesView = new RecipesView({
            collection: recipes
        });
    });

    afterEach(function() {
        recipeListElement.innerHTML = '';
    });

    describe('#bind(recipes)', function() {
        it('should bind the recipes properties with the template', function () {
            recipeListElement.children.should.have.length(0);
            recipesView.render();
            recipesView.el.children.should.have.length(2);
            recipesView.el.querySelector('.name').innerHTML.should.match(/arroz con pollo/);
        });

        it('should render every ingredient of the recipe', function() {
            recipesView.render();
            recipesView.el.children[0].querySelector('section>p').innerHTML.should.match(/arroz, pollo/);
            recipesView.el.children[1].querySelector('section>p').innerHTML.should.match(/aji, gallina/);
        });
    });

});