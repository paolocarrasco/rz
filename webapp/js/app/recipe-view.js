!(function(module, Mustache) {
  'use strict';
  module.RecipeView = module.Backbone.View.extend({
    model: module.Recipe,

    /* jshint -W101 */
    template: '<div class="ingredients"><ul>{{#ingredients}}<li>{{name}}</li>{{/ingredients}}</ul></div>',
    /* jshint +W101 */

    render: function() {
      this.el.innerHTML = Mustache.render(this.template, this.model.attributes);
    }
  });
})(this, this.Mustache);