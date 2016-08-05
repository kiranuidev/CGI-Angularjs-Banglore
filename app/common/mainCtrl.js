angular.module("flipzon")
    .controller("mainCtrl", ["$scope", "$rootScope", "loginSvc", function ($scope, $rootScope, loginSvc) {
        $scope.headerUrl = "app/templates/header.html";
        $scope.showLogin = true;
        $scope.cartCount = 0;

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
        };
        $rootScope.$on("USER_LOGGEDIN", function (evt, args) {
            console.log(args);
            $scope.loadContent("products");
        });

        $rootScope.$on("PRODUCT_ADDED_CART", function (evt, args) {
            $scope.cartCount++;
        });


            }]);
