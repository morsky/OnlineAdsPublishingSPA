app.controller('ShowAdsController', ['$scope', 'adsServices', 'pageSize',
	function($scope, adsServices, pageSize) {	
		$scope.headerTitle = 'Home';
		$scope.adsLoaded = false;

		$scope.adsParams = {
			'startPage': 1,
			'pageSize': pageSize,
			'categoryid': null,
			'townid': null
		};

		loadAds();

		$scope.loadAds = function() {
			$scope.adsLoaded = false;
			loadAds();
		};

		$scope.takeCategoryId = function(id) {
			$scope.adsParams.categoryId = id;
			$scope.adsParams.startPage = 1;
			// console.log('category: ' + category + 'town:' + town);
			$scope.adsLoaded = false;
			loadAds();

			$scope.activeClassCategory = id;
		};

		$scope.takeTownId = function(id) {
			$scope.adsParams.townId = id;
			$scope.adsParams.startPage = 1;
			$scope.adsLoaded = false;
			// console.log('category: ' + category + 'town:' + town);
			loadAds();

			$scope.activeClassTown = id;
		};

		adsServices.getCategories(function(response) {
			$scope.categories = response;
		});

		adsServices.getTowns(function(response) {
			$scope.towns = response;
		});

		function loadAds() {
			adsServices.getAds($scope.adsParams, function(response) {
				$scope.data = response;
				$scope.adsLoaded = true;
			});
		};
	}
]);