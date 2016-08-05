angular.module("flipzon", ["ui.router", "login", "register", "home"]);

//step4

angular.module("flipzon")
    .config(["$stateProvider", "$urlRouterProvider",
         function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            //route declartaion
            var login = {
                templateUrl: "app/templates/login.html",
                controller: "loginCtrl",
                url: "/"
            };

            var registerObj = {
                templateUrl: "app/templates/register.html",
                controller: "registerCtrl",
                url: "/register"
            };
            var homeObj = {
                templateUrl: "app/templates/home.html",
                controller: "homeCtrl",
                url: "/home",
                params: {
                    data: ""
                }

            };
            //registring the route.
            $stateProvider.state("login", login);

            $stateProvider.state("register", registerObj);
            $stateProvider.state("home", homeObj);
         }]);
