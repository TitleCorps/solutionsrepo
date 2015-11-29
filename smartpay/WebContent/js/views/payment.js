
define([   
        'jquery',
        'underscore',
        'backbone',
        'libs/b3.5/js/bootstrap.min',
        'text!templates/payment.html'
        ], function($, _, Backbone, Bootstrap,paymentTemplate){

	
	var Payment = Backbone.Model.extend({
		urlRoot: '/makePayment'
	}); 																																																																																																																																																																																						

																																																																																																																																																																																																																																																																																																																														
	var PaymentView = Backbone.View.extend({
		el: '.content',
		events: {
			'submit .payment-form': 'makePayment'
		},
		makePayment : function(ev){
			var that = this;
			var paymentData = _.object(_.map($(ev.currentTarget).serializeArray(), _.values))
			
			var param = {paymentData : paymentData};
			var payment = new Payment();
			// set focus when modal is opened
			$('#squarespaceModal').on('shown.bs.modal', function () {
			   
			});
			$('#squarespaceModal').modal({'show' : true});
			payment.save(paymentData, {
				success: function () {
					$('#squarespaceModal').modal('hide');
					alert("Transaction is successful");
				}
			});
			return false;
		},
		render: function () {
			screenName = "payment";
			var that = this;
			var menuId = "#payment";
			menuChange(menuId);
			var compiledTemplate = _.template( paymentTemplate, { } );
			that.$el.html(compiledTemplate);

		}
	});

	return PaymentView;
});

