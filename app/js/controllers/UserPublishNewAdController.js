app.controller('UserPublishNewAdController', ['$scope', '$location', 'adsServices', 'userServices', 'notifyServices',
	function($scope, $location, adsServices, userServices, notifyServices) {
		$scope.headerTitle = 'Publish New Ad';
		$scope.hideMyAdsPanel = false;

		var pictureData = '';

		$scope.publishAd = function(adData) {
			adData.imageDataUrl = pictureData;
			console.log(adData);
			userServices.createNewAd(adData);
			$location.path('/user/ads');
		}

		$scope.cancel = function() {
			$location.path('/user/ads');
		}

		$scope.fileSelected = function(fileInputField) {
			var file = fileInputField.files[0];
			
			if (file.type.match(/image\/.*/)) {
				var reader = new FileReader();
				
				reader.onload = function() {
					pictureData = reader.result;
					$(".image-box").html("<img src='" + reader.result + "'>");
				}
			} 
			else {
				$(".image-box").html("<p>File type not supported!</p>");
			}

			reader.readAsDataURL(file);
		};

		adsServices.getCategories(function(response) {
			$scope.categories = response;
		});

		adsServices.getTowns(function(response) {
			$scope.towns = response;
		});
	}
]);