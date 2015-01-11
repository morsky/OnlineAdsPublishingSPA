app.controller('UserPublishNewAdController', ['$scope', '$location', 'adsServices', 'userServices', 'notifyServices',
	function($scope, $location, adsServices, userServices, notifyServices) {
		$scope.headerTitle = 'Publish New Ad';
		$scope.hideMyAdsPanel = false;

		$scope.publishAd = function(adData) {
			console.log(adData);
			userServices.createNewAd(adData);
			$location.path('/user/ads');
		}

		$scope.cancel = function() {
			$location.path('/user/ads');
		}

		adsServices.getCategories(function(response) {
			$scope.categories = response;
		});

		adsServices.getTowns(function(response) {
			$scope.towns = response;
		});
	}
]);