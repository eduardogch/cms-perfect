/**
 * Admin Angular Controller
 */
App.controller('AdminController', ['$scope', 'AdminService', function($scope, AdminService) {

    $scope.bankBalance = 'Admin';
    $scope.helloWorld = AdminService.helloWorld();
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

}]);