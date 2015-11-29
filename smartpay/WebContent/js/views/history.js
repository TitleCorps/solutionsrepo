
define([   
        'jquery',
        'underscore',
        'backbone',
        'libs/b3.5/js/bootstrap.min',
        'text!templates/history.html'
        ], function($, _, Backbone, Bootstrap,historyTemplate){

	var History = Backbone.Model.extend({
		urlRoot: '/getHistory'
	});

	var HistoryView = Backbone.View.extend({
		el: '.content',
		render: function () {
			screenName = "history";
			var that = this;
			var menuId = "#history";
			menuChange(menuId);
			var history = new History();
			history.fetch({
				success: function (bean) {
					var data ;
					if(bean.attributes.paymentBeanList){
						data = {
								blocks : bean.attributes.paymentBeanList,
								_: _
						}
					}

					var compiledTemplate = _.template( historyTemplate, {variable: 'data'} )(data);
					that.$el.html(compiledTemplate);
				}
			}
			);

		}
	});
	return HistoryView;
});

