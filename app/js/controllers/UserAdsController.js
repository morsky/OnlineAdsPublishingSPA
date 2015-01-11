app.controller('UserAdsController', ['$scope', 'userServices', 'pageSize',
	function($scope, userServices, pageSize) {	
		$scope.headerTitle = 'My Ads';
		$scope.adsLoaded = false;

		$scope.adsParams = {
			'startPage': 1,
			'pageSize': pageSize,
		};

		loadUserAds();

		$scope.loadUserAds = function() {
			$scope.adsLoaded = false;
			loadUserAds();
		};

		function loadUserAds() {
			userServices.getUserAds($scope.adsParams, function(response) {
				$scope.data = response;
				$scope.adsLoaded = true;
			});
		};
	}
]);