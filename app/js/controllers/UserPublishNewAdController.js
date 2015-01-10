app.controller('UserPublishNewAdController', ['$scope', '$location', 'adsServices', 'userServices', 'notifyServices',
	function($scope, $location, adsServices, userServices, notifyServices) {
		$scope.headerTitle = 'Publish New Ad';

		$scope.publishAd = function(adData) {
			console.log(adData);

			userServices.createNewAd(adData,
				function success() {
					notifyServices.showSuccess('ReservedAdvertisement submitted for approval.' +
						'Once approved, it will be published.');
					$location.path("/user/ads");
				},
				function error(err) {
					notifyServices.showError('Publish ad failed:', err);
				}
			);
		}

		adsServices.getCategories(function(response) {
			$scope.categories = response;
		});

		adsServices.getTowns(function(response) {
			$scope.towns = response;
		});
	}
]);