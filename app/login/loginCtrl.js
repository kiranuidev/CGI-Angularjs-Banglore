angular.module("login")
    .controller("loginCtrl", ["$scope", "loginSvc",
                              function ($scope, loginSvc) {
            $scope.loginUser = {};

            $scope.login = function () {
                loginSvc.loginUser($scope.loginUser);
            };

}]);
