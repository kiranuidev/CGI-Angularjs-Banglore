angular.module("products")
    .controller("productCtrl", ["$scope", "productSvc",
                                function ($scope, productSvc) {

            //$scope.products = productSvc.products();

            $scope.addProduct = function (product) {
                productSvc.addProductForCheckout(product);
            };

            productSvc.getProductsFromPromise()
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                });
            console.log("I am in the regularmode");

}]);
