app.controller('ListAds', ['serviceHandler', function(serviceHandler) {
	var self = this;

	// self.name = 'Vlado';

	serviceHandler.getAllAds(function(response) {
		self.data = response;
	})

	serviceHandler.getAllCategories(function(response) {
		self.categories = response;
	})

	serviceHandler.getAllTowns(function(response) {
		self.towns = response;
	})
}]);