app.controller('ListAds', ['$http', '$log', 'serviceHandler', function($http, $log, serviceHandler) {
	var self = this;

	// self.name = 'Vlado';

	self.headerTitle = 'Home';

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