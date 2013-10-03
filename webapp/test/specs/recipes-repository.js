/* globals RecipesRepository: true */
describe('RecipesRepository', function() {
    var recipesRepository, data, recipesUri = '/ws/recipes';
    'use strict';
    
    beforeEach(function() {
        var jsonFetcher = {
            getJSON : function(url, success) {
                if(url !== recipesUri) { return; }
                success(data);
            }
        };
        data = {};
        recipesRepository = new RecipesRepository(recipesUri, jsonFetcher);
    });
    
    describe('#list(callback)', function() {
        it('should retrieve all the recipes', function(done) {
            data.recipes = [{}, {}];
            recipesRepository.list(function(fetchedRecipes) {
                fetchedRecipes.should.have.length(2);
                done();
            });
        });
    });
});
