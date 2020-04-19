angular.module('StatuesApp').factory('$statues', ['$http', function ($http) {
    return {
        getAllStatues: function () {
            return $http.get('/api/statues');
        },
        getAllStatueCategs: function () {
            return $http.get('/api/statues/categories');
        },
        getAllStatueContributors: function () {
            return $http.get('/api/statues/contributors');
        },
        getAllStatueAddresses: function () {
            return $http.get('/api/statues/addresses');
        }
    };
}]);
