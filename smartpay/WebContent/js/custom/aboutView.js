/* UserView - START */
define([   
        'jquery',
        'underscore',
        'backbone',
        'home',
        'text!templates/about.html'
        ], function($, _, Backbone, Bootstrap, 
        		Home, aboutTemplate){


	
	var AboutView = Backbone.View.extend({
		el: '.content',
		render: function () {
			screenName = "about";
			var that = this;
			var users = new User();
			var menuId = '#about'; 
			menuChange(menuId);
			var menu = $('#topNavDiv');
			menu.removeClass('navbar-fixed-top');
			menu.addClass('navbar-static-top');
			var compiledTemplate = _.template( aboutView, { } );
			that.$el.html(compiledTemplate);
		}
	});

	
	
});