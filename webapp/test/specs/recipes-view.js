/* globals RecipesView, Recipe, RecipesContainer, $ */
describe('RecipesView', function () {
  'use strict';
  var recipesView, recipes;

  beforeEach(function () {
    var recipe1 = new Recipe({
        name: 'arroz con pollo',
        label: 'arroz-con-pollo',
        imageUrl: '/img/arroz-con-pollo.jpg',
        description: 'comida de arroz y pollo',
        ingredients: [{name: 'arroz'}, {name: 'pollo'}]
      }),
      recipe2 = new Recipe({
        name: 'aji de gallina',
        label: 'aji-gallina',
        description: 'comida criolla de arroz y gallina',
        imageUrl: '/img/aji-gallina.jpg',
        ingredients: [
          {name: 'aji'},
          {name: 'gallina'},
          {name: 'papas'},
          {name: 'almendras'},
          {name: 'mani'}
        ]
      });
    recipes = new RecipesContainer([recipe1, recipe2]);
    recipesView = new RecipesView({
      collection: recipes
    });
  });

  describe('binding to collection', function() {

    it('should render if the collection added a new recipe', function(done) {
      recipesView.on('render', done);
      recipes.add(new Recipe());
    });

  });

  describe('#render()', function() {

    it('should bind the properties of recipes to the template', function () {
      recipesView.render();
      var recipesSection = recipesView.el;
      recipesSection.children.should.have.length(2);
      var recipeName = recipesSection.querySelector('.name');
      recipeName.innerHTML.should.match(/arroz con pollo/);
      var recipeDescription = recipesSection.querySelector('header>p');
      recipeDescription.innerHTML.should.match(/comida de arroz y pollo/);
      var recipeImages = recipesSection.querySelectorAll('img');
      recipeImages[1].src.should.be.match(/\/img\/aji-gallina.jpg/);
    });

    it('should render maximum four top ingredients of each recipe', function() {
      var ingredients1, ingredients2, recipeSections;

      recipesView.render();
      recipeSections = recipesView.el.children;
      ingredients1 = recipeSections[0].querySelectorAll('section p span');
      ingredients2 = recipeSections[1].querySelectorAll('section p span');

      ingredients1[0].innerText.should.eq('arroz');
      ingredients1[1].innerText.should.eq('pollo');
      should.not.exist(ingredients1[2]);
      ingredients2[0].innerText.should.eq('aji');
      ingredients2[1].innerText.should.eq('gallina');
      ingredients2[2].innerText.should.eq('papas');
      ingredients2[3].innerText.should.eq('almendras');
      should.not.exist(ingredients2[4]);
    });

  });


  describe('#on(\'selected\', handler)', function() {

    it('should call the event when a recipe is clicked', function(done) {
      recipesView.on('selected', function(label) {
        label.should.match(/arroz-con-pollo/);
        done();
      });
      recipesView.render();
      $(recipesView.el.children[0]).click();
    });

  });

});