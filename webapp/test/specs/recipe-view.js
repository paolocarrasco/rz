/* globals RecipeView, Recipe */
describe('RecipeView', function() {
  'use strict';
  var recipeView;

  beforeEach(function() {
    var recipe = new Recipe({
        name: 'arroz con pollo',
        label: 'arroz-con-pollo',
        imageUrl: '/img/arroz-con-pollo.jpg',
        description: 'comida criolla de arroz y pollo',
        ingredients: [{name: 'arroz'}, {name: 'pollo'}]
      });
    recipeView = new RecipeView({ model: recipe });
  });

  describe('#render()', function() {

    it('should render the ingredients of the recipe', function() {
      recipeView.render();
      recipeView.el.querySelector('.ingredients ul').
        children.should.have.length(2);
    });

  });
});