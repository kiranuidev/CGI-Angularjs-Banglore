angular.module("home", []);

angular.module("home")
    .controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {
        console.log($state);
}]);
