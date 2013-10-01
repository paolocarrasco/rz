var RecipesContainer = function() {
    'use strict';
    var recipes = [];
    this.addRecipes = function(rcps) {
        recipes = rcps;
    };
    this.__defineGetter__("recipes", function(){
        return recipes;
    });
}