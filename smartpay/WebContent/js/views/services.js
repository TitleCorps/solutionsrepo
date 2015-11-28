
define([   
        'jquery',
        'underscore',
        'backbone',
        'libs/b3.5/js/bootstrap.min',
        'text!templates/products.html'
        ], function($, _, Backbone, Bootstrap,productsTemplate){

	var ProductsView = Backbone.View.extend({
		el: '.content',
		render: function () {
			screenName = "products";
			var that = this;
			//var users = new User();
			var menuId = '#products'; 
			menuChange(menuId);
			var menu = $('#topNavDiv');
			menu.removeClass('navbar-static-top');
			menu.addClass('navbar-fixed-top');
			var compiledTemplate = _.template( productsTemplate, { } );
			that.$el.html(compiledTemplate);

		}
	});
	return ProductsView;
});

