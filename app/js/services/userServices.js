app.factory('userServices', ['$http', 'baseUrl', 'authServices' , 'notifyServices', 
    function($http, baseUrl, authServices, notifyServices) {
        return {
            createNewAd: function(adData) {
                $http({
                    method: 'POST',
                    url: baseUrl + 'user/ads',
                    headers: authServices.getAuthHeaders(),
                    data: adData
                })
                .success(function() {
                    notifyServices.showSuccess('ReservedAdvertisement submitted for approval. Once approved, it will be published.');
                })
                .error(function(err) {
                    notifyServices.showError('Publish ad failed:', err);
                });
            },

            getUserAds: function(params, success) {
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

            deactivateAd: function(id) {
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

            publishAgainAd: function(id) {
                $http({
                    method: 'PUT',
                    url: baseUrl + 'user/ads/publishagain/' + id,
                    headers: authServices.getAuthHeaders()
                })
                .success(function() {
                    notifyServices.showSuccess('Ad successfully published!!');
                })
                .error(function() {
                    notifyServices.showError('Error publishing ad!! Try again!!');
                })
            },

            getAdById: function(id) {
                $http({
                    method: 'GET',
                    url: baseUrl + 'user/ads/' + id,
                    headers: authServices.getAuthHeaders()
                })
                .success(function(data) {
                    sessionStorage['adData'] = JSON.stringify(data);
                })
                .error(function() {
                    notifyServices.showError('Error loading ad!! Try again!!');
                })
            },

            editAd: function(id, data) {
                $http({
                    method: 'PUT',
                    url: baseUrl + 'user/ads/' + id,
                    headers: authServices.getAuthHeaders(),
                    data: data
                })
                .success(function() {
                    notifyServices.showSuccess('Ad successfully edited!!');
                })
                .error(function() {
                    notifyServices.showError('Error editing ad!!');
                })
            },

            deleteAd: function(id) {
                $http({
                    method: 'DELETE',
                    url: baseUrl + 'user/ads/' + id,
                    headers: authServices.getAuthHeaders()
                })
                .success(function() {
                    notifyServices.showSuccess('Ad successfully deleted!!');
                })
                .error(function() {
                    notifyServices.showError('Error deleting ad!!');
                })
            }
        }
    }
]);