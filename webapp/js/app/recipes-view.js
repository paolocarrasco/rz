/* globals Mustache */
!(function(module) {
    'use strict';
    var RecipesView = module.Backbone.View.extend({
        tagName: 'section',
        template: '<article><img src="{{imageUrl}}" alt="{{name}}" ><header><h1 class="name">{{name}}</h1><p>{{description}}</p></header><section><h2>Ingredientes principales</h2><p>{{#ingredients}}{{name}}, {{/ingredients}}</p></section></article>',
        render: function() {
            var recipesBounded = [],
                template = this.template;
            this.collection.each(function(recipe) {
               recipesBounded.push(
                    Mustache.render(template, recipe.attributes)
                );
            });
            this.$el.html(recipesBounded.join(''));
            return this;
        }
    });

    module.RecipesView = RecipesView;
})(this);