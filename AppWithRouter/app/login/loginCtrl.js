angular.module("login")
    .controller("loginCtrl", ["$scope", "loginSvc", "$rootScope", "$state",
                              function ($scope, loginSvc, $rootScope, $state) {
            $scope.loginUser = {};

            $scope.login = function () {
                $state.go("home", {
                    data: "Hey"
                });
                /*var isLoggedIn = loginSvc.loginUser($scope.loginUser);
if (isLoggedIn) {
    $rootScope.$broadcast("USER_LOGGEDIN", {
        data: "congrats"
    });
}*/
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
