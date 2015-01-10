app.factory('authServices', ['$http', 'baseUrl', function($http, baseUrl) {
    return {
        login: function(userData, success, error) {
            $http({
                method: 'POST',
                url: baseUrl + 'user/login',
                data: userData
            })
            .success(function(data) {
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            })
            .error(error);
        },

        register: function(userData, success, error) {
            $http({
                method: 'POST',
                url: baseUrl + 'user/register',
                data: userData
            })
            .success(function(data) {
                sessionStorage['currentUser'] = JSON.stringify(data);
                success(data);
            }).error(error);
        },

        logout: function() {
            delete sessionStorage['currentUser'];
        },

        getCurrentUser : function() {
            var userObject = sessionStorage['currentUser'];
            if (userObject) {
                return JSON.parse(sessionStorage['currentUser']);
            }
        },

        isAnonymous : function() {
            return sessionStorage['currentUser'] == undefined;
        },

        isLoggedIn : function() {
            return sessionStorage['currentUser'] != undefined;
        },

        isNormalUser : function() {
            var currentUser = this.getCurrentUser();
            console.log(currentUser);
            alert(currentUser);
            return (currentUser != undefined) && (!currentUser.isAdmin);
        },

        // isAdmin : function() {
        //     var currentUser = this.getCurrentUser();
        //     return (currentUser != undefined) && (currentUser.isAdmin);
        // },

        getAuthHeaders : function() {
            var headers = {};
            var currentUser = this.getCurrentUser();
            if (currentUser) {
                headers['Authorization'] = 'Bearer ' + currentUser.access_token;
            }
            return headers;
        }
    }
}]);