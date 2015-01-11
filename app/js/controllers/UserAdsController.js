app.controller('UserAdsController', ['$scope', 'userServices', 'pageSize',
	function($scope, userServices, pageSize) {	
		$scope.headerTitle = 'My Ads';
		$scope.adsLoaded = false;

		$scope.adsParams = {
			'startPage': 1,
			'pageSize': pageSize,
		};

		$scope.showAll = function() {
			$scope.adsParams.status = '';
			loadUserAds();
		}

		$scope.showPublished = function() {
			$scope.adsParams.status = 'Published';
			$scope.adType = 'published'
			loadUserAds();
		}

		$scope.showWaitingApproval = function() {
			$scope.adsParams.status = 'WaitingApproval';
			$scope.adType = 'waiting approval';
			loadUserAds();
		}

		$scope.showInactive = function() {
			$scope.adsParams.status = 'Inactive';
			$scope.adType = 'inactive';
			loadUserAds();
		}

		$scope.showRejected = function() {
			$scope.adsParams.status = 'Rejected';
			$scope.adType = 'rejected';
			loadUserAds();
		}

		$scope.deactivateAd = function(id) {
			userServices.deactivateAd(id);
			loadUserAds();
		}

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