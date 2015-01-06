app.controller('ListAds', ['$log', 'serviceHandler', function($log, serviceHandler) {
	var self = this;

	// self.name = 'Vlado';

	self.headerTitle = 'Home';
	self.adsLoaded = false;

	serviceHandler.getAllAds(function(response) {
		self.data = response;
		self.adsLoaded = true;	
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