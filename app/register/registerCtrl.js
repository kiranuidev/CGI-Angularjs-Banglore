angular.module("register")
    .controller(
        "registerCtrl", [
        "$scope",
        function ($scope) {
                $scope.user = {};
                $scope.countries = [{
                        name: "India",
                        code: "IN",
                        continent: "Asia"
                    },
                    {
                        name: "Canada",
                        code: "CA",
                        continent: "NA"
                    },
                    {
                        name: "United States",
                        code: "US",
                        continent: "NA"
                    }];
        }
    ]
    )
