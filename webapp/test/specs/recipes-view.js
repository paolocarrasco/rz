/* globals RecipesView, Recipe, RecipesContainer, $ */
describe('RecipesView', function () {
    'use strict';
    var recipesView, recipes, recipeListElement;

    before(function() {
        recipeListElement = document.createElement('section');
    });

    beforeEach(function () {
        var recipe1 = new Recipe({
                name: 'arroz con pollo',
                label: 'arroz-con-pollo',
                imageUrl: '/img/arroz-con-pollo.jpg',
                description: 'comida criolla de arroz y pollo',
                ingredients: [{name: 'arroz'}, {name: 'pollo'}]
            }),
            recipe2 = new Recipe({
                name: 'aji de gallina',
                label: 'aji-gallina',
                description: 'comida criolla de arroz y gallina',
                imageUrl: '/img/aji-gallina.jpg',
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

    describe('binding to collection', function() {

        it('should render if the collection added a new recipe', function(done) {
            recipesView.on('render', done);
            recipes.add(new Recipe());
        });

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
            recipesView.el.children[0].querySelector('section>p').innerText.should.match(/arroz pollo/);
            recipesView.el.children[1].querySelector('section>p').innerText.should.match(/aji gallina/);
        });

    });


    describe('#on(\'selected\', handler)', function() {

        it('should call the event when the link of a recipe is clicked', function(done) {
            recipesView.on('selected', function(label) {
                label.should.match(/arroz-con-pollo/);
                done();
            });
            recipesView.render();
            $(recipesView.el.children[0]).click();
        });

    });

});