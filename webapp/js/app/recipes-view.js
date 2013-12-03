/* globals Mustache */
!(function(module) {
    'use strict';
    var RecipesView = module.Backbone.View.extend({
        initialize: function() {
            this.collection.bind('reset add', this.render, this);
        },
        tagName: 'section',
        template: '<article><img src="{{imageUrl}}" alt="{{name}}"><header><h1 data-name="{{label}}" class="name">{{name}}</h1><p>{{description}}</p></header><section><h2>Ingredientes principales</h2><p>{{#ingredients}}<span>{{name}}</span> {{/ingredients}}</p></section></article>',
        render: function() {
            var recipesBounded = [],
                template = this.template;
            this.collection.each(function(recipe) {
               recipesBounded.push(
                    Mustache.render(template, recipe.attributes)
                );
            });
            this.$el.html(recipesBounded.join(''));
            this.trigger('render');
            return this;
        },
        select: function(recipeName) {
            this.trigger('selected', recipeName);
        },
        events: {
            'click': 'select'
        },
    });

    module.RecipesView = RecipesView;
})(this);