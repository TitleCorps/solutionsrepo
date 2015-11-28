//Filename: home.js
define([   
        'jquery',
        'underscore',
        'backbone',
        'libs/b3.5/js/bootstrap.min',
        'text!templates/home.html'
        ], function($, _, Backbone, Bootstrap, 
        		homeTemplate){

	var User = Backbone.Model.extend({
		urlRoot: '/users'
	});

	/* UserView - START */
	var HomeView = Backbone.View.extend({
		el: '.content',
		render: function () {
			screenName = "home";
			var that = this;
			var users = new User();
			var menuId = '#home'; 
			menuChange(menuId);
			var menu = $('#topNavDiv');
			menu.removeClass('navbar-fixed-top');
			menu.addClass('navbar-static-top');
			users.fetch({
				success: function (users) {

					var compiledTemplate = _.template( homeTemplate, { } );
					that.$el.html(compiledTemplate);
					homeInitailize();
				}
			})
		}
	});

	return HomeView;

});

var screenName = "home";

function homeInitailize(){

	menuInitialze();
	//$("#homeCarousel").carousel();
}

function menuInitialze(){

	var menu = $('#topNavDiv'), pos = menu.offset();
	menu.fadeIn();
	$(window).scroll(function(){

		if($(this).scrollTop() > pos.top){
			menu.removeClass('navbar-static-top');
			menu.addClass('navbar-fixed-top');
		} else if($(this).scrollTop() <= pos.top && screenName=="home"){
			menu.removeClass('navbar-fixed-top');
			menu.addClass('navbar-static-top');
		} 
	});
}


function mainNav() {
	var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if (top > 40) $('.sticky-navigation').stop().animate({"top": '-60'});

	else $('.sticky-navigation').stop().animate({"top": '-60'});
}


function fluxInitialize(){

	if (!flux.browser.supportsTransitions)
		alert("Flux Slider requires a browser that supports CSS3 transitions");

	window.f = new flux.slider('#slider',
			{
		pagination : false,
		controls : false,
		transitions : [ 'explode', 'tiles3d', 'bars3d', 'cube','turn' ],
		autoplay : false
			});

	$('.transitions').click(
			function(event) {
				event.preventDefault();
				window.f.next($(event.target).data('transition'), $(
						event.target).data('params'));
			});
}

function menuChange(id){

	$('.nav.navbar-nav > li').removeClass('active');
	$(id).addClass('active');


}