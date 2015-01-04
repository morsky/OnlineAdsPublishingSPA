app.controller('ListAds', ['$http', '$log', 'serviceHandler', function($http, $log, serviceHandler) {
	var self = this;

	// self.name = 'Vlado';

	serviceHandler.getAllAds(function(response) {
		self.data = response;
	});

	serviceHandler.getAllCategories(function(response) {
		self.categories = response;
	});

	serviceHandler.getAllTowns(function(response) {
		self.towns = response;
	});

	self.takeCategoryId = function(id) {
		self.itemId = id;
		console.log(self.itemId);

		// $http({method: 'GET',
		// 	url: 'http://softuni-ads.azurewebsites.net/api/ads',
		// 	params: { 'categoryid': id }
		// })
		// .success(function(data) {
		// 	// success(data);
		// 	self.data = data;
		// 	$log.log(data);
		// })
		// .error(function(data, status) {
		// 	$log.warn(data);
		// });

		serviceHandler.getCategoryAds(id, function(response) {
			self.data = response;
		});
	};

	self.takeTownId = function(id) {
		self.itemId = id;
		console.log(self.itemId);

		serviceHandler.getTownAds(id, function(response) {
			self.data = response;
		});
	};
}]);