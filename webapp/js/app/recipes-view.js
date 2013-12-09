/* globals jQuery, Mustache, _ */
!(function(module, $) {
  'use strict';

  var RecipesView = module.Backbone.View.extend({

    initialize: function() {
      this.collection.bind('reset add', this.render, this);
    },

    tagName: 'section',

    /* jshint -W101 */
    template: '<article data-name="{{label}}"><img src="{{imageUrl}}" alt="{{name}}"><header><h1 class="name">{{name}}</h1><p>{{description}}</p></header><section><h2>Ingredientes principales</h2><p>{{#ingredients}}<span>{{name}}</span>{{/ingredients}}</p></section></article>',
    /* jshint +W101 */

    render: function() {
      var recipesBounded = [],
        template = this.template;

      this.collection.each(function(recipe) {
        var model = _.extend(recipe.attributes);

        if(model.ingredients && model.ingredients.length > 4) {
          model.ingredients = model.ingredients.slice(0,4);
        }

        recipesBounded.push(
          Mustache.render(template, model)
        );
      });

      this.$el.html(recipesBounded.join(''));
      this.trigger('render');
      return this;
    },

    select: function(event) {
      this.trigger('selected', $(event.target).closest('article').data('name'));
    },

    events: {
      'click': 'select'
    }
  });

  module.RecipesView = RecipesView;
})(this, jQuery);