angular.module('StatuesApp').controller('StatuesController', ['$scope', 'statues','$mdSidenav','$timeout', '$mdDialog',
    function($scope, statues, $mdSidenav, $timeout, $mdDialog) {

    $scope.statues = statues.data;
    $scope.cotinue = false;
    $scope.tabs    = [
        {
            "tabId": 1,
            "tabName": "Toate statuile"

        }, 
        {
            "tabId": 2,
            "tabName": "Statui in ordine alfabetica"
        },
        {
            "tabId": 3,
            "tabName": "Statui dupa profile"
        }
    ];


    function showConfirm(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Aplicatia STATUI IN BUCURESTI este realizata  in anul' +
            ' universitar 2016-2017 de catre studentii de la masterul de IE Facultatea CSIE din ASE.')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Continuare');

    $mdDialog.show(confirm).then(function() {
      $scope.continue = true;
    }, function() {
      //
    });
  };

      showConfirm();  
}]);