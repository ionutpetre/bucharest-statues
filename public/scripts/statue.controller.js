angular.module('StatuesApp').controller('StatueController', ['$scope', 'statue', function($scope, statue) {
    $scope.statue = statue.data;
    $scope.myInterval=3000;
    $scope.noWrapSlides = false;
    $scope.active = 1;
    $scope.slides=[
                   {
                	   image:"images/statues/statue_"+$scope.statue.id+"/front.jpg"
                   },
                   
                   {
                	   image:"images/statues/statue_"+$scope.statue.id+"/left.jpg"
                   },
                   
                   {
                	   image:"images/statues/statue_"+$scope.statue.id+"/right.jpg"
                   },
                   
                   {
                	   image:"images/statues/statue_"+$scope.statue.id+"/back.jpg"
                   }
                   ];
    
    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
    
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
}]);
