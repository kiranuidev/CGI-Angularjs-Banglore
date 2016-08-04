angular.module("flipzon")
    .controller("mainCtrl", ["$scope", "loginSvc", function ($scope, loginSvc) {
        $scope.headerUrl = "app/templates/header.html";
        $scope.showLogin = true;

        var baseUrl = "app/templates/";
        $scope.loadContent = function (type) {
            if (type == "register") {
                $scope.contentUrl = baseUrl + type + ".html";
            } else {
                var security = loginSvc.isAuthenticated();

                if (security.authenticated) {
                    $scope.showLogin = false;
                    $scope.userdetails = security.firstname + "," + security.lastname;
                    $scope.contentUrl = baseUrl + type + ".html";
                } else {
                    $scope.showLogin = true;
                    $scope.contentUrl = baseUrl + "login.html";
                }
            }

        };

        $scope.logout = function () {
            loginSvc.logout();
            $scope.loadContent("login");
        }

            }]);
