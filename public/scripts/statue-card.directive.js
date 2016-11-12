angular.module('StatuesApp').directive('statueCard', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/statue-card.html',
        controller: 'StatueCardController',
        scope: {
            statue: '='
        }
    };
});
