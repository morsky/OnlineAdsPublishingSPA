app.factory('serviceHandler', ['$http', '$log', '$resource', 'baseUrl', function($http, $log, $resource, baseUrl) {
	var count = 0;
	return {
		getAllAds: function(success) {
			$http({
				method: 'GET',
				url: baseUrl + 'ads'
			})
			.success(function(data) {
				success(data);
			})
			.error(function(data, status) {
				$log.warn(data);
				alert('Error reading DB!!!');
			})
		},

		getCategoryAds: function(category, success) {
			$http({
				method: 'GET',
				url: baseUrl + 'ads',
				params: { 'categoryid': category }
			})
			.success(function(data) {
				success(data);
				$log.log(data);
			})
			.error(function(data, status) {
				$log.warn(data);
			})
		},

		getTownAds: function(town, success) {
			$http({
				method: 'GET',
				url: baseUrl + 'ads',
				params: { 'townid': town }
			})
			.success(function(data) {
				success(data);
				$log.log(data);
			})
			.error(function(data, status) {
				$log.warn(data);
			})
		},

		getAllCategories: function(success) {
			$http({
				method: 'GET',
				url: baseUrl + 'categories'
			})
			.success(function(data, status, headers, config) {
				success(data);
			})
			.error(function(data, status, headers, config) {
				$log.warn(data);
			})
		},

		getAllTowns: function(success) {
			$http({
				method: 'GET',
				url: baseUrl + 'towns'
			})
			.success(function(data, status, headers, config) {
				success(data);
				alert('repeat ' + count);
				count += 1;
			})
			.error(function(data, status, headers, config) {
				$log.warn(data);
			})
		}
	}
}]);