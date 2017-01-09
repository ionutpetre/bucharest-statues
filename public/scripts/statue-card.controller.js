angular.module('StatuesApp').controller('StatueCardController', ['$scope', '$location', function ($scope, $location) {

    $scope.STATUE_DETAILS_LIMIT = 100;

    $scope.goHome = goHome;

    function goHome(path) {
        $location.path(path);
    };
}]);