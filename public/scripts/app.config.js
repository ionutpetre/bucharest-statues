angular.module('StatuesApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('statues', {
        url: '/statues',
        controller: 'StatuesController',
        templateUrl: 'views/statues.html',
        resolve: {
            statues: ['$statues', function ($statues) {
                return $statues.getAllStatues();
            }],
            statueCategs: ['$statues', function ($statues) {
                return $statues.getAllStatueCategs();
            }],
            statueContributors: ['$statues', function ($statues) {
                return $statues.getAllStatueContributors();
            }],
            statueAddresses: ['$statues', function ($statues) {
                return $statues.getAllStatueAddresses();
            }]
        }
    }).state('statue', {
        url: '/statue/:id',
        controller: 'StatueController',
        templateUrl: 'views/statue.html',
        resolve: {
            statue: ['$stateParams', '$statue', function ($stateParams, $statue) {
                return $statue.getStatueById($stateParams.id);
            }]
        }
    });
    $urlRouterProvider.otherwise('/statues');
}]);