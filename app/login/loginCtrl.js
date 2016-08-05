angular.module("login")
    .controller("loginCtrl", ["$scope", "loginSvc", "$rootScope",
                              function ($scope, loginSvc, $rootScope) {
            $scope.loginUser = {};

            $scope.login = function () {
                var isLoggedIn = loginSvc.loginUser($scope.loginUser);
                if (isLoggedIn) {
                    $rootScope.$broadcast("USER_LOGGEDIN", {
                        data: "congrats"
                    });
                }
            };

            $scope.name = "kiran";
            $scope.$watch("name", function (newVal, oldVal) {
                console.log(newVal);
                console.log(oldVal);

            });

            setTimeout(function () {
                $scope.name = "PVS";
                $scope.$apply();
            }, 5000);



}]);
