angular.module('StatuesApp').controller('StatuesController', ['$scope', 'statues', 'statueCategs', 'statueContributors', 'statueAddresses', 'DIALOG_SHOW_MINS', 'DIALOG', 'FILTERS', '$mdSidenav', '$mdDialog', '$cookies',
    function ($scope, statues, statueCategs, statueContributors, statueAddresses, DIALOG_SHOW_MINS, DIALOG, FILTERS, $mdSidenav, $mdDialog, $cookies) {
        $scope.statues = statues.data;
        $scope.categories = statueCategs.data;
        $scope.contributors = statueContributors.data;
        $scope.addresses = statueAddresses.data;
        $scope.filters = FILTERS;
        $scope.setSelectedFilters = setSelectedFilters;
        showConfirm(); setFilterValues({}, '');

        function setFilterValues(search, orderBy) {
            $scope.search = search;
            $scope.orderBy = orderBy;
        }

        function setSelectedFilters(filterIdx) {
            angular.forEach($scope.filters, function (filter, filterKey) {
                filter.selected = (filterIdx == filterKey);
                if (filter.selected) {
                    switch (filter.id) {
                        case $scope.filters[0].id: setFilterValues({}, ''); break;
                        case $scope.filters[1].id: setFilterValues({}, 'name'); break;
                        case $scope.filters[2].id: setFilterValues({}, 'category'); break;
                        case $scope.filters[3].id: setFilterValues({}, 'contributor'); break;
                    }
                }
            });
        }

        function getExpireDate() {
            var expireDate = new Date();
            expireDate.setMinutes(expireDate.getMinutes() + DIALOG_SHOW_MINS);
            return expireDate;
        }

        function showConfirm(evt) {
            if (!$cookies.get('userEntered')) {
                var confirm = $mdDialog.confirm()
                    .title(DIALOG.TITLE)
                    .textContent(DIALOG.CONTENT)
                    .targetEvent(evt).ok(DIALOG.OK_BTN);
                $mdDialog.show(confirm).then(function () {
                    $cookies.put('userEntered', true, { 'expires': getExpireDate() });
                });
            }
        }
    }
]);