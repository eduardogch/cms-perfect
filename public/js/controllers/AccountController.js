/**
 * Account Angular Controller
 */
App.controller('AccountController', ['$scope', 'AccountService', function($scope, AccountService) {

    $scope.bankBalance = 'Account';
    $scope.helloWorld = AccountService.helloWorld();
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

}]);
