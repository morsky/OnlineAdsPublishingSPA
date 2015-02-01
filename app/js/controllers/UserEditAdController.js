app.controller('UserEditAdController', ['$scope', '$location', 'userServices', 'adsServices',
	function($scope, $location, userServices, adsServices){
		$scope.headerTitle = 'Edit Ad';
		$scope.adData = JSON.parse(sessionStorage['adData']);
		$scope.image = 'img/noImage.png';
		var image = '',
			changeImage = false;

		$scope.edit = function(adData) {
			var categoryId = adData.categoryId,
				categoryName = adData.categoryName,
				date = adData.date,
				id = adData.id,
				text = adData.text,
				title = adData.title,
				townId = adData.townId,
				townName = adData.townName;
			
			// adData.imageDataUrl = image;

			var data = {
				'categoryId': categoryId,
				'categoryName': categoryName,
				'date': date,
				'id': id,
				'text': text,
				'title': title,
				'townId': townId,
				'townName': townName,
				'imageDataUrl': image,
				'changeImage': changeImage
			}

			console.log(data);

			userServices.editAd(id, data);
			$location.path('/user/ads');
		};

		$scope.cancel = function() {
			$location.path('/user/ads');
		};

		$scope.fileSelected = function(fileInputField) {
			var file = fileInputField.files[0];
			
			if (file.type.match(/image\/.*/)) {
				var reader = new FileReader();
				reader.readAsDataURL(file);
				
				reader.onload = function() {					
					$(".image-box").html("<img src='" + reader.result + "'>");					
					image = reader.result;
					changeImage = true;				
				}				
			} 
			else {
				$(".image-box").html("<p>File type not supported!</p>");
			}			
		};

		$scope.delete = function() {
			image = '';
			changeImage = true;
			$scope.image = 'img/noImage.png';
			$scope.showBrowse = false;
		}

		var imageData = $scope.adData.imageDataUrl;

		if (imageData) {
			$scope.image = imageData;
		}

		adsServices.getCategories(function(response) {
			$scope.categories = response;
		});

		adsServices.getTowns(function(response) {
			$scope.towns = response;
		});
	}
]);