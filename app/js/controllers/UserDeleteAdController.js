app.controller('UserDeleteAdController', ['$scope', '$location', 'userServices', 
	function($scope, $location, userServices){
		$scope.headerTitle = 'Delete Ad';
		$scope.formHeader = 'Confirm Deleting Ad?';
		$scope.adData = JSON.parse(sessionStorage['adData']);
		$scope.image = 'img/noImage.png';

		$scope.delete = function() {
			var id = $scope.adData.id;
			userServices.deleteAd(id);
		};

		$scope.cancel = function() {
			$location.path('/user/ads');
		};
		
		var imageData = $scope.adData.imageDataUrl;

		if (imageData) {
			$scope.image = imageData;
		}
	}
]);