/**
 * Payment Angular Controller
 */
App.controller('PaymentController', ['$scope', 'PaymentService', function($scope, PaymentService) {

    $scope.bankBalance = 'Payment';
    $scope.helloWorld = PaymentService.helloWorld();
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

}]);