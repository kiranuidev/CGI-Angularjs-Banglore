angular.module("login")
    .service("loginSvc", ["$http", function ($http) {
        var security = {
            authenticated: false,
            firstname: "",
            lastname: ""
        };


        //to login user
        this.loginUser = function (userDetails) {

            $http.get("app/data/user.json")
                .then(function (response) {
                    console.log(response);
                    angular.forEach(response.data.users, function (item) {
                        if (item.username === userDetails.username &&
                            item.password === userDetails.password) {
                            security.authenticated = true;
                            security.firstname = item.firstname;
                            security.lastname = item.lastname;
                        }
                    });
                })
                .catch(function (errorResponse) {
                    console.log(errorResponse);
                });

        };

        this.logout = function () {
            security.authenticated = false;
            security.firstname = "";
            security.lastname = "";
        };

        this.isAuthenticated = function () {
            return security;
        };

}]);
