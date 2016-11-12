angular.module('StatuesApp').controller('StatuesController', ['$scope', 'statues', function($scope, statues) {
    $scope.statues = statues.data;
}]);