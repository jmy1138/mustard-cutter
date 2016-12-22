(function ( window, document, undefined ) {

	'use strict';


	/**
	 * Selectors
	 */
	var featuresForm = document.getElementById('js-features-form');
	var selectedFeatures = [];
	var testResult = document.getElementById('js-tests-result');
	var clipboardButton = document.getElementById('js-clipboard-btn');
<<<<<<< HEAD
var browsers = [
	'chrome',
	'edge',
	''
];
=======
	var supportTable = document.getElementById('js-browser-support');

>>>>>>> origin/master

	/**
	 * Feature Object
	 */
	var featureList = {
		querySelector: {
			test: '\'querySelector\' in document',
			support: {
				chrome: 1,
				edge: 13,
				firefox: 3.5,
				ie: 8,
				opera: 10,
				safari: 3.2,
				android: 2.1,
				firefoxmobile: 1.0,
				iemobile: 9,
				operamobile: 10,
				safarimobile: 3.2
			}
		},
		addEventListener: {
			test: '\'addEventListener\' in window',
			support: {
				chrome: 1,
				edge: 13,
				firefox: 1,
				ie: 9,
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
				edge: 13,
				firefox: 3.6,
				ie: 10,
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

	var forEach = function (collection, callback, scope) {
	  if (Object.prototype.toString.call(collection) === '[object Object]') {
	    for (var prop in collection) {
	      if (Object.prototype.hasOwnProperty.call(collection, prop)) {
	        callback.call(scope, collection[prop], prop, collection);
	      }
	    }
	  } else {
	    for (var i = 0, len = collection.length; i < len; i++) {
	      callback.call(scope, collection[i], i, collection);
	    }
	  }
	};


	var addFeature = function( elem ) {
		var featureName = elem.getAttribute('data-feature');
		var featureItem = featureList[featureName];
		toggleArrayItem( selectedFeatures, featureItem);
		createFeatureTest();
		createFeatureSupport();
	};


	var createFeatureTest = function() {
		var testArray = [];
		for (var key in selectedFeatures) {
			testArray.push( selectedFeatures[key].test );
		}
		var tests = testArray.join(" && ");
		if (tests.length > 0) {
			testResult.innerHTML =  'if(' + tests + ') {' + '\n' + '\t' + '// bootstrap the javascript application' + '\n' + '}';
		} else {
			testResult.innerHTML = '';
		}
	};


	var createFeatureSupport = function() {
		var supportArray = [];
<<<<<<< HEAD
		for (var key in selectedFeatures) {
			supportArray.push( selectedFeatures[key].support );
			console.log( selectedFeatures[key].support );
		}

		var maxBrowserSupport = {};
		for(var browser in browsers){
			maxBrowserSupport[browser] = _.max(_.map(_.map(supportArray,browser));
		}
		return maxBrowserSupport;
		//var firefox = _.max(_.map(_.map(supportArray,'firefox')));
		//var internetexplorer = _.max(_.map(_.map(supportArray,'internetexplorer')));

		//console.log( _.max(_.map(_.map(supportArray,'firefox'))) );

		//console.log( firefox );
		//console.log( internetexplorer );

=======

		for (var key in selectedFeatures) {
			supportArray.push( selectedFeatures[key].support );
		}

		var maxBrowserSupport = {
			chrome: _.max(_.map(_.map(supportArray, 'chrome'))),
			edge: _.max(_.map(_.map(supportArray, 'edge'))),
			firefox: _.max(_.map(_.map(supportArray, 'firefox'))),
			ie: _.max(_.map(_.map(supportArray, 'ie'))),
			opera: _.max(_.map(_.map(supportArray, 'opera'))),
			safari: _.max(_.map(_.map(supportArray, 'safari'))),
			android: _.max(_.map(_.map(supportArray, 'android'))),
			firefoxmobile: _.max(_.map(_.map(supportArray, 'firefoxmobile'))),
			iemobile: _.max(_.map(_.map(supportArray, 'iemobile'))),
			operamobile: _.max(_.map(_.map(supportArray, 'operamobile'))),
			safarimobile: _.max(_.map(_.map(supportArray, 'safarimobile')))
		};

		forEach( maxBrowserSupport, function (value) {

		});
>>>>>>> origin/master
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