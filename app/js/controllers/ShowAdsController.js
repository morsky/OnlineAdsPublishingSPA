app.controller('ShowAdsController', ['$scope', 'adsServices',
	function($scope, adsServices) {
		var category = '',
			town = '';
	
		$scope.headerTitle = 'Home';
		$scope.adsLoaded = false;		

		loadAds(category, town);

		$scope.takeCategoryId = function(id) {
			category = id;
			// console.log('category: ' + category + 'town:' + town);
			loadAds(category, town);

			$scope.activeClassCategory = id;
		};

		$scope.takeTownId = function(id) {
			town = id;
			// console.log('category: ' + category + 'town:' + town);
			loadAds(category, town);

			$scope.activeClassTown = id;
		};

		adsServices.getCategories(function(response) {
			$scope.categories = response;
		});

		adsServices.getTowns(function(response) {
			$scope.towns = response;
		});

		function loadAds(category, town) {
			adsServices.getAds(category, town, function(response) {
				$scope.data = response;
				$scope.adsLoaded = true;	
			});
		};
	}
]);