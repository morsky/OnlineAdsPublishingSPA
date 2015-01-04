app.factory('serviceHandler', function($http, $log) {
	return {
		getAllAds: function(success) {
			$http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/ads'})
			.success(function(data) {
				success(data);
			})
			.error(function(data, status) {
				$log.warn(data);
			})
		},

		getCategoryAds: function(category, success) {
			$http({method: 'GET',
				url: 'http://softuni-ads.azurewebsites.net/api/ads',
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
			$http({method: 'GET',
				url: 'http://softuni-ads.azurewebsites.net/api/ads',
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
			$http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/categories'})
			.success(function(data, status, headers, config) {
				success(data);
			})
			.error(function(data, status, headers, config) {
				$log.warn(data);
			})
		},

		getAllTowns: function(success) {
			$http({method: 'GET', url: 'http://softuni-ads.azurewebsites.net/api/towns'})
			.success(function(data, status, headers, config) {
				success(data);
			})
			.error(function(data, status, headers, config) {
				$log.warn(data);
			})
		}
	}
});