
define([   
        'jquery',
        'underscore',
        'backbone',
        'libs/b3.5/js/bootstrap.min',
        'text!templates/contactus.html'
        ], function($, _, Backbone, Bootstrap,contactTemplate){

	var Contact = Backbone.Model.extend({
		urlRoot: '/contact'
	}); 

	
	var ContactView = Backbone.View.extend({
		el: '.content',

		events: {
			'submit .contact-form': 'saveContact'
		},
		saveContact: function (ev) {
			var that = this;
			var contactDetails = _.object(_.map($(ev.currentTarget).serializeArray(), _.values))
			
			var param = {contactDetails : contactDetails};
			var contact = new Contact();
			contact.save(contactDetails, {
				success: function (user) {
					// app_router.navigate('', {trigger:true});
				}
			});
			return false;
		},
		
		validateContactDetails  : function(contactDetails){
			
			if(contactDetails){
			}
			
		},

		render: function () {
			screenName = "contact";
			var menuId = '#contact'; 
			menuChange(menuId);
			var that = this;

			var compiledTemplate = _.template( contactTemplate, { } );
			that.$el.html(compiledTemplate);

			var menu = $('#topNavDiv');
			menu.removeClass('navbar-static-top');
			menu.addClass('navbar-fixed-top');

		}
	});
	return ContactView;
});

