var screenName = "home";

function menuChange(id){
	
	$('.nav.navbar-nav > li').removeClass('active');
    $(id).addClass('active');
}

//Filename: router.js
define([   
        'jquery',
        'underscore',
        'backbone',
        'views/home',
        'views/about',
        'views/services',
        'views/contact'
        ], function($, _, Backbone, 
        		HomeView,
        		AboutView,
        		ServicesView,
        		ContactView
        		){

	function htmlEncode(value){
		return $('<div/>').text(value).html();
	}

	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				var name = this.name || '';
				o[name] = this.value || '';
			}
		});
		return o;
	};
	$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
		options.url = 'http://localhost:8181/smartpayservice' + options.url;
	});
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			'':'home',
			'contact' : 'showContactForm',
			'about' : 'showAbout',
			'services' : 'showServices',
			// Default
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;

		app_router.on('route:home', function(){
			var homeView = new HomeView();
			homeView.render();
			
		});

		app_router.on('route:showAbout', function(){
			var aboutView = new AboutView();		
			aboutView.render();

		});


		app_router.on('route:showContactForm', function(actions){
			var contactView = new ContactView();
			contactView.render();

		});

		app_router.on('route:showServices', function(actions){
			var productsView = new ProductsView();
			productsView.render();

		});
		
		app_router.on('route:defaultAction', function(actions){
			// We have no matching route, lets just log what the URL was
			console.log('No route 1:', actions);
		});

		// Extend the View class to include a navigation method goTo
		Backbone.View.prototype.goTo = function (loc) {
			app_router.navigate(loc, true);
		};

		Backbone.history.start();
		
		$(document).on('click','.navbar-collapse.in',function(e) {

		    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
		        $(this).collapse('hide');
		    }

		});
	};
	return {
		initialize: initialize
	};
});