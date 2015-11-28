function initializeAbout(){

	$("#aboutCarousel").carousel();

}

define([   
        'jquery',
        'underscore',
        'backbone',
        'libs/b3.5/js/bootstrap.min',
        'text!templates/about.html'
        ], function($, _, Backbone, Bootstrap,aboutTemplate){

	var AboutView = Backbone.View.extend({
		el: '.content',
		render: function () {
			screenName = "about";
			var that = this;
			var menuId = '#about'; 
			menuChange(menuId);
			var menu = $('#topNavDiv');
			menu.removeClass('navbar-static-top');
			menu.addClass('navbar-fixed-top');
			var compiledTemplate = _.template( aboutTemplate, { } );
			that.$el.html(compiledTemplate);

			initializeAbout();
		}
	});

	return AboutView;
});

