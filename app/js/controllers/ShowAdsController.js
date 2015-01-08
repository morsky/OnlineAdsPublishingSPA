app.controller('ShowAdsController', ['$scope', 'adsServices',
	function($scope, adsServices) {
		var category = '',
			town = '';
	
		$scope.headerTitle = 'Home';
		$scope.adsLoaded = false;

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

		loadAds(category, town);

		$scope.takeCategoryId = function(id) {
			category = id;
			// console.log('category: ' + category);

			loadAds(category, town);
		};

		$scope.takeTownId = function(id) {
			console.log($scope.itemId);

			town = id;
			// console.log('town: ' + town);

			loadAds(category, town);
		};
	}
]);