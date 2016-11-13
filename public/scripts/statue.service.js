angular.module('StatuesApp').factory('$statue', ['$http', function ($http) {
    return {
        getStatueById: function (id) {
            return $http.get('/api/statues/' + id);
        }
    };
}]);