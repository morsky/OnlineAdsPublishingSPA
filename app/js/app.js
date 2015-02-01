var app = angular.module('mySPAProject', ['ngRoute', 'ui.bootstrap.pagination'])

app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');
// app.constant('baseUrl', 'http://localhost:1337/api/');
app.constant('pageSize', 10);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
			templateUrl: 'partials/baseHomeScreen.html'
		})
		.when('/login', {
			templateUrl: 'partials/login.html'
		})
		.when('/register', {
			templateUrl: 'partials/register.html'
		})
		.when('/user/ads/publish', {
			templateUrl: 'partials/publish-new-ad.html',
			resolve: {
				isUserLogedin: ['$location', 'authServices', function($location, authServices) {
					if ($location.path().indexOf("/user/") != -1 && !authServices.isLoggedIn()) {
						// Authorization check: anonymous site visitors cannot access user routes
						$location.path("/");
					}
				}]
			}
		})
		.when('/user/ads/', {
			templateUrl: 'partials/myAds.html',
			resolve: {
				isUserLogedin: ['$location', 'authServices', function($location, authServices) {
					if ($location.path().indexOf("/user/") != -1 && !authServices.isLoggedIn()) {
						// Authorization check: anonymous site visitors cannot access user routes
						$location.path("/");
					}
				}]
			}
		})
		.when('/user/ads/edit/:id', {
			templateUrl: 'partials/edit-ad-form.html',
			resolve: {
				isUserLogedin: ['$location', 'authServices', function($location, authServices) {
					if ($location.path().indexOf("/user/") != -1 && !authServices.isLoggedIn()) {
						// Authorization check: anonymous site visitors cannot access user routes
						$location.path("/");
					}
				}]
			}
		})
		.when('/user/ads/deleteAd/:id', {
			templateUrl: 'partials/delete-ad-form.html',
			resolve: {
				isUserLogedin: ['$location', 'authServices', function($location, authServices) {
					if ($location.path().indexOf("/user/") != -1 && !authServices.isLoggedIn()) {
						// Authorization check: anonymous site visitors cannot access user routes
						$location.path("/");
					}
				}]
			}
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);