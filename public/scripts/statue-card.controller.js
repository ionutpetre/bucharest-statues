angular.module('StatuesApp').controller('StatueCardController', ['$scope','$location', function($scope, $location) {

    $scope.goHome = goHome;

    function goHome(path) {
        $location.path(path);
    };
}]);