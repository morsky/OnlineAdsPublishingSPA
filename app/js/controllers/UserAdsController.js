app.controller('UserAdsController', ['$scope', '$location', 'authServices', 'userServices', 'pageSize',
	function($scope, $location, authServices, userServices, pageSize) {	
		$scope.headerTitle = 'My Ads';
		$scope.adsLoaded = false;
		$scope.hideMyAdsPanel = true;

		$scope.adsParams = {
			'startPage': 1,
			'pageSize': pageSize,
		};

		$scope.showAll = function() {
			$scope.adsParams.status = '';
			$scope.showPanel = false;
			loadUserAds();
		}

		$scope.showPublished = function() {
			$scope.adsParams.status = 'Published';
			$scope.adType = 'published'
			$scope.showPanel = false;
			loadUserAds();
		}

		$scope.showWaitingApproval = function() {
			$scope.adsParams.status = 'WaitingApproval';
			$scope.adType = 'waiting approval';
			$scope.showPanel = false;
			loadUserAds();
		}

		$scope.showInactive = function() {
			$scope.adsParams.status = 'Inactive';
			$scope.adType = 'inactive';
			$scope.showPanel = true;
			loadUserAds();
		}

		$scope.showRejected = function() {
			$scope.adsParams.status = 'Rejected';
			$scope.adType = 'rejected';
			$scope.showPanel = false;
			loadUserAds();
		}

		$scope.deactivateAd = function(id) {
			userServices.deactivateAd(id);
			loadUserAds();
		}

		$scope.editAd = function(id) {
			alert('TODO Edit' + id);
			userServices.getAdById(id);
			$location.path('/user/ads/edit/:' + id);
		}

		$scope.publishAd = function(id) {
			userServices.publishAgainAd(id);
			loadUserAds();
		}

		$scope.deleteAd = function(id) {
			userServices.getAdById(id);
			$location.path('/user/ads/deleteAd/:' + id);
		}

		if (authServices.isLoggedIn()) {
			loadUserAds();
		}		

		function loadUserAds() {
			userServices.getUserAds($scope.adsParams, function(response) {
				$scope.data = response;
				$scope.adsLoaded = true;
			});
		};
	}
]);