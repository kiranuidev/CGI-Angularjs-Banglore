angular.module("components", []);


angular.module("components")
    .directive("cgiTitle", [function () {

        return {
            template: "CGI",
            restrict: "AEC"
        };

}]);
