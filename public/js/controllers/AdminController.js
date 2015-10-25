/**
 * Admin Angular Controller
 */
App.controller('AdminController', ['$scope', 'AdminService', function($scope, AdminService) {

    $scope.bankBalance = 'Admin';
    $scope.helloWorld = AdminService.helloWorld();
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    var
        nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
        familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

    function createRandomItem() {
        var
            firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100),
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

    $scope.itemsByPage=15;

    $scope.rowCollection = [];
    for (var j = 0; j < 200; j++) {
        $scope.rowCollection.push(createRandomItem());
    }

}]);