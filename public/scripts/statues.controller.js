angular.module('StatuesApp').controller('StatuesController', ['$scope', 'statues', 'DIALOG', 'TABS', '$mdSidenav', '$mdDialog', '$cookies',
    function($scope, statues, DIALOG, TABS, $mdSidenav, $mdDialog, $cookies) {
        $scope.statues = statues.data;
        $scope.tabs = TABS;
        showConfirm();

        function getExpireDate() {
            var expireDate = new Date();
            expireDate.setMinutes(expireDate.getMinutes() + 1);
            return expireDate;
        }

        function showConfirm(evt) {
            if (!$cookies.get('userEntered')) {
                var confirm = $mdDialog.confirm()
                    .title(DIALOG.TITLE)
                    .textContent(DIALOG.CONTENT)
                    .targetEvent(evt).ok(DIALOG.OK_BTN);
                $mdDialog.show(confirm).then(function() {
                    $cookies.put('userEntered', true, { 'expires': getExpireDate() });
                });
            }
        }
    }
]);