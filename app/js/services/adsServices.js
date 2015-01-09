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
		getAds: function(params, success) {
			$http({
				method: 'GET',
				url: baseUrl + 'ads',
				params: params
			})
			.success(function(data) {
				success(data);
			})
			.error(function(data) {
				console.log(data);
				alert('Error reading DB!!!');
			})
		},

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