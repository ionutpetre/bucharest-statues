angular.module('StatuesApp').factory('$statue', ['$http', function ($http) {
    return {
        getById: function (id) {
            return $http.get('/api/statues/' + id);
        }
    };
}]);