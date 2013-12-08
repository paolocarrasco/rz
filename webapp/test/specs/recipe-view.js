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

    it('should render all the ingredients', function() {
      recipeView.render();
      recipeView.el.querySelector('.ingredients ul').
        children.should.have.length(2);
    });

    it('should render the name of the ingredients', function() {
      recipeView.render();
      var list = recipeView.el.querySelectorAll('.ingredients ul li');
      list[0].innerHTML.should.be.eq('arroz');
      list[1].innerHTML.should.be.eq('pollo');
    });

  });
});