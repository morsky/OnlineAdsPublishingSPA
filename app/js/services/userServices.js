app.factory('userServices', ['$http', 'baseUrl', 'authServices', function($http, baseUrl, authServices) {
        return {
            createNewAd: function (adData, success, error) {
                $http({
                    method: 'POST',
                    url: baseUrl + 'user/ads12',
                    headers: authServices.getAuthHeaders(),
                    data: adData
                })
                .success(success)
                .error(error);
            },

            getUserAds: function (params, success, error) {
                $http({
                    method: 'GET',
                    url: baseUrl + 'user/ads',
                    headers: authServices.getAuthHeaders(),
                    params: params
                })
                .success(success)
                .error(error);
            },

            deactivateAd: function (id, success, error) {
                // TODO
            },

            publishAgainAd: function (id, success, error) {
                // TODO
            }
        }
    }
]);