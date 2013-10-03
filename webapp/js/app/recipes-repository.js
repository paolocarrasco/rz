var RecipesRepository = function(recipesUri, jsonFetcher) {
    var fetcher = jsonFetcher;
    this.list = function(callback) {
        fetcher.getJSON(recipesUri, function(data) {
            callback(data.recipes);
        });
    };
};