angular.module('StatuesApp').factory('$statues', ['$http', function ($http) {
    return {
        getAllStatues: function () {
            return $http.get('/api/statues');
        }
    };
}]);
