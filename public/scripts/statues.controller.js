angular.module('StatuesApp').controller('StatuesController', ['$scope', 'statues', 'DIALOG', 'FILTERS', 'CATEGORIES', '$mdSidenav', '$mdDialog', '$cookies',
    function($scope, statues, DIALOG, FILTERS, CATEGORIES, $mdSidenav, $mdDialog, $cookies) {
        $scope.statues = statues.data;
        $scope.filters = FILTERS;
        $scope.categories = CATEGORIES;
        $scope.setSelectedFilters = setSelectedFilters;
        showConfirm();
        setFilterValues({}, '');

        function setFilterValues(search, orderBy) {
            $scope.search = search;
            $scope.orderBy = orderBy;
        }

        function setSelectedFilters(filterIdx) {
            angular.forEach($scope.filters, function(filter, filterKey) {
                filter.selected = (filterIdx == filterKey);
                if (filter.selected) {
                    switch (filter.id) {
                        case $scope.filters[0].id: setFilterValues({}, ''); break;
                        case $scope.filters[1].id: setFilterValues({}, 'name'); break;
                        case $scope.filters[2].id: setFilterValues({}, 'category'); break;
                    }
                }
            });
        }

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