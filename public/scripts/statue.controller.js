angular.module('StatuesApp').controller('StatueController', ['$scope', 'statue', function($scope, statue) {
    $scope.statue = statue.data;
}]);