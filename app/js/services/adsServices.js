// app.factory('townsService', ['$http', 'baseUrl', function($http, baseUrl) {
// 	return {
// 		getTowns: function(success) {
// 			$http({
// 				method: 'GET',
// 				url: baseUrl + 'towns'
// 			})
// 			.success(function(data) {
// 				success(data);
// 			})
// 			.error(function(data) {
// 				console.log(data);
// 			});
// 		}
// 	}
// }]);

// app.factory('CategoriesService', ['$http', 'baseUrl', function($http, baseUrl) {
// 	return {
// 		getCategories: function(success) {
// 			$http({
// 				method: 'GET',
// 				url: baseUrl + 'categories'
// 			})
// 			.success(function(data) {
// 				success(data);
// 			})
// 			.error(function(data) {
// 				console.log(data);
// 			});
// 		}
// 	}
// }]);

app.factory('adsServices', ['$http', 'baseUrl', function($http, baseUrl) {
	return {
		getAds: function(success) {
			$http({
				method: 'GET',
				url: baseUrl + 'ads'
			})
			.success(function(data) {
				success(data);
			})
			.error(function(data) {
				console.log(data);
				alert('Error reading DB!!!');
			})
		},

		// getCategoryAds: function(category, success) {
		// 	$http({
		// 		method: 'GET',
		// 		url: baseUrl + 'ads',
		// 		params: { 'categoryid': category }
		// 	})
		// 	.success(function(data) {
		// 		success(data);
		// 		$log.log(data);
		// 	})
		// 	.error(function(data, status) {
		// 		$log.warn(data);
		// 	})
		// },

		// getTownAds: function(town, success) {
		// 	$http({
		// 		method: 'GET',
		// 		url: baseUrl + 'ads',
		// 		params: { 'townid': town }
		// 	})
		// 	.success(function(data) {
		// 		success(data);
		// 		$log.log(data);
		// 	})
		// 	.error(function(data, status) {
		// 		$log.warn(data);
		// 	})
		// },

		getCategories: function(success) {
			$http({
				method: 'GET',
				url: baseUrl + 'categories'
			})
			.success(function(data) {
				success(data);
			})
			.error(function(data) {
				console.log(data);
			})
		},

		getTowns: function(success) {
			$http({
				method: 'GET',
				url: baseUrl + 'towns'
			})
			.success(function(data) {
				success(data);
			})
			.error(function(data) {
				console.log(data);
			})
		}
	}
}]);