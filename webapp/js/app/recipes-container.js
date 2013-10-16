!(function(module) {
    'use strict';
    var RecipesContainer = function(recipesRepository) {
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
    module.RecipesContainer = RecipesContainer;
})(this);
