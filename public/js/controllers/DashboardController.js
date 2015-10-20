/**
 * Dashboard Angular Controller
 */
App.controller('DashboardController', ['$scope', 'DashboardService', function($scope, DashboardService) {

    $scope.bankBalance = 'Dashboard';
    $scope.helloWorld = DashboardService.helloWorld();
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

}]);