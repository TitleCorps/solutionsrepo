//Filename: home.js
define([   
        'jquery',
        'underscore',
        'backbone',
        'libs/b3.5/js/bootstrap.min',
        'text!templates/signin.html'
        ], function($, _, Backbone, Bootstrap, 
        		signInTemplate){

	var SignIn = Backbone.Model.extend({
		urlRoot: '/signin'
	});

	/* UserView - START */
	var SignView = Backbone.View.extend({
		el: '.content',
		render: function () {
			screenName = "signin";
			var that = this;
			var menuId = '#signupin';
			menuChange(menuId);
			var compiledTemplate = _.template( signInTemplate, {});
			that.$el.html(compiledTemplate);
		}


	});

	return SignView;

});

