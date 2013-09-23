var RecipeView = function(params) {
    var recipeTemplate = 
                    '<article>\
                        <img src="{{imageUrl}}" alt="{{name}}" >\
                        <header>\
                            <h1 class="name">{{name}}</h1>\
                            <p>{{description}}</p>\
                        </header>\
                        <section>\
                            <h2>Ingredientes principales</h2>\
                            <p>{{ingredients}}</p>\
                        </section>\
                    </article>';
    var recipeContainer = params.recipeContainer;
                    
    this.bind = function() {
        var recipesBounded = [];
        
        for(var index = 0, len = recipeContainer.recipes.length; index < len; index++) {
            var recipe = recipeContainer.recipes[index];
            var recipeBounded = recipeTemplate
                        .replace(/{{imageUrl}}/g, recipe.imageUrl)
                        .replace(/{{name}}/g, recipe.name)
                        .replace(/{{description}}/g, recipe.ingredients);
            recipesBounded.push(recipeBounded);
        }
        params.element.innerHTML = recipesBounded.join('');
    };
};