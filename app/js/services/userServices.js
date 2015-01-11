app.factory('userServices', ['$http', 'baseUrl', 'authServices' , 'notifyServices', 
    function($http, baseUrl, authServices, notifyServices) {
        return {
            createNewAd: function (adData, success, error) {
                $http({
                    method: 'POST',
                    url: baseUrl + 'user/ads',
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
                .success(function(data) {
                    success(data);
                })
                .error(function(err) {
                    console.log(err);
                    notifyServices.showError('Error loading ads!!');
                });
            },

            deactivateAd: function (id) {
                console.log(id);
                $http({
                    method: 'PUT',
                    url: baseUrl + 'user/ads/deactivate/' + id,
                    headers: authServices.getAuthHeaders()
                })
                .success(function() {
                    notifyServices.showSuccess('Ad successfully deactivated!!');
                })
                .error(function() {
                    notifyServices.showError('Error deactivating ad!! Try again!!');
                })
            },

            publishAgainAd: function (id, success, error) {
                // TODO
            }
        }
    }
]);