!(function(module, $, Mustache, _) {
  'use strict';

  var RecipesView = module.Backbone.View.extend({

    initialize: function() {
      this.listenTo(this.collection, 'reset add', this.render);
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
      var recipeName = $(event.target).closest('article').data('name');
      this.trigger('selected', recipeName);
    },

    events: {
      'click': 'select'
    }
  });

  module.RecipesView = RecipesView;
})(this, this.jQuery, this.Mustache, this._);