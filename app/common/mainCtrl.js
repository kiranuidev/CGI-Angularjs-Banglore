angular.module("flipzon")
    .controller("mainCtrl", ["$scope", function($scope) {
        $scope.headerUrl = "app/templates/header.html";

        var baseUrl = "app/templates/";
        $scope.loadContent = function(type) {
            $scope.contentUrl = baseUrl + type + ".html";

        };
    }]);