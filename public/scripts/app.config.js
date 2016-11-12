angular.module('StatuesApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('statues', {
        url: '/statues',
        controller: 'StatuesController',
        templateUrl: 'views/statues.html',
        resolve: {
            statues: ['$statues', function($statues) {
                return $statues.getAll();
            }]
        }
    }).state('statue', {
        url: '/statue/:id',
        controller: 'StatueController',
        templateUrl: 'views/statue.html',
        resolve: {
            statue: ['$stateParams', '$statue', function($stateParams, $statue) {
                return $statue.getById($stateParams.id);
            }]
        }
    });
    $urlRouterProvider.otherwise('/statues');
}]);