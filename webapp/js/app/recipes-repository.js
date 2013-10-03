!(function(module) {
    'use strict';
    var RecipesRepository = function(recipesUri, jsonFetcher) {
        var fetcher = jsonFetcher;
        this.list = function(callback) {
            fetcher.getJSON(recipesUri, function(data) {
                callback(data.recipes);
            });
        };
    };
    module.RecipesRepository = RecipesRepository;
})(this);