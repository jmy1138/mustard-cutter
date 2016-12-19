(function ( window, document, undefined ) {

	'use strict';


	/**
	 * Selectors
	 */
	var featuresForm = document.getElementById('js-features-form');
	var selectedFeatures = [];
	var testResult = document.getElementById('js-tests-result');
	var clipboardButton = document.getElementById('js-clipboard-btn');


	/**
	 * Feature Object
	 */
	var featureList = {
		querySelector: {
			test: '\'querySelector\' in document',
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
		},
		addEventListener: {
			test: '\'addEventListener\' in window',
			support: {
				chrome: 1,
				edge: 'Yes',
				firefox: 1,
				internetexplorer: 9,
				opera: 7,
				safari: 1.0,
				android: 1.0,
				firefoxmobile: 1.0,
				iemobile: 9.0,
				operamobile: 6.0,
				safarimobile: 1.0
			}
		},
		classList: {
			test: '\'classList\' in document.documentElement',
			support: {
				chrome: 8,
				edge: 'Yes',
				firefox: 3.6,
				internetexplorer: 10,
				opera: 11.5,
				safari: 5.1,
				android: 3.0,
				firefoxmobile: 1.0,
				iemobile: 10,
				operamobile: 11.1,
				safarimobile: 5.0
			}
		}
	};


	/**
	 * Methods
	 */
	var toggleArrayItem = function( collection, item ) {
		var idx = _.indexOf(collection, item);
		if(idx !== -1) {
			collection.splice(idx, 1);
		} else {
			collection.push(item);
		}
	};


	var addFeature = function( elem ) {
		var featureName = elem.getAttribute('data-feature');
		var featureItem = featureList[featureName];
		toggleArrayItem( selectedFeatures, featureItem);
		createFeatureTest();
	};


	var createFeatureTest = function() {
		var testArrary = [];
		for (var key in selectedFeatures) {
			testArrary.push( selectedFeatures[key].test );
		}
		var tests = testArrary.join(" && ");
		if (tests.length > 0) {
			testResult.innerHTML =  'if(' + tests + ') {' + '\n' + '\t' + '// bootstrap the javascript application' + '\n' + '}';
		} else {
			testResult.innerHTML = '';
		}
	};


	/**
	 * Events/APIs/init
	 */
	featuresForm.addEventListener('change', function(e) {
		var feature = e.target;
		addFeature( feature );
	});

	new Clipboard(clipboardButton);


})( window, document );