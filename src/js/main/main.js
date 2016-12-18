(function ( window, document, undefined ) {

	'use strict';


	/**
	 * Selectors
	 */
	var features = document.getElementById('js-features-form');
	var featureArray = [];

	// Features
	var querySelector = {
		string: 'document.querySelector',
		support: {
			chrome: 1,
			edge: 'Yes',
			firefox: 3.5,
			internetexplorer: 8,
			opera: 10,
			safari: 3.2,
			android: 2.1,
			firefoxmobile: 'Yes',
			iemobile: 9,
			operamobile: 10,
			safarimobile: 3.2
		}
	};

	var addEventListener = {
		string: 'window.addEventListener',
		support: {
			chrome: 1,
			edge: 'Yes',
			firefox: 1,
			internetexplorer: 9,
			opera: 10,
			safari: 3.2,
			android: 2.1,
			firefoxmobile: 'Yes',
			iemobile: 9,
			operamobile: 10,
			safarimobile: 3.2
		}
	};


	/**
	 * Methods
	 */
	 var collectFeature = function( elem ) {
	 	var featureString = elem.getAttribute('data-feature');
	 	console.log(featureString);
	 };


	/**
	 * Events/APIs/init
	 */
	features.addEventListener('change', function(e) {
		var feature = e.target;
		collectFeature( feature );
	});


})( window, document );