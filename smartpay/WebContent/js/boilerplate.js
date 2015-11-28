//Filename: boilerplate.js

define([
  // These are path alias that we configured in our bootstrap
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'backbone',    // lib/backbone/backbone
  'bootstrap',	//lib/bootstrap/js/bootstrap
  //'ejs',
  'flux',
  'home',
  //,
  //'text'
], function($, _, Backbone,Bootstrap,
		//Ejs, 
		Flux, Home
		//,Text
		){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  return {};
  // What we return here will be used by other modules
});
