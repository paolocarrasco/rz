var RecipesContainer = function(recipesRepository) {
    'use strict';
    var recipes = [],
        repository = recipesRepository;
    this.fetch = function (callback) {
        repository.list(function(fetchedRecipes) {
            recipes = fetchedRecipes;
            callback();
        });
    };
    this.__defineGetter__("recipes", function(){
        return recipes;
    });
};