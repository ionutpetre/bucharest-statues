angular.module('StatuesApp').factory('$statues', ['$http', function ($http) {
    return {
        getAll: function () {
            return $http.get('/api/statues');
        }
    };
}]);
