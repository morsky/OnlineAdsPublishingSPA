app.controller('AppController', ['$scope', '$location', 'authServices', 'notifyServices', 
	function ($scope, $location, authService, notifyService) {
		$scope.authService = authService;

        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("Logout successful");
            $location.path('/');
        };
}]);