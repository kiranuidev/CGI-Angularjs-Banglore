angular.module("products")
    .controller("productCtrl", ["$scope", "productSvc", "$rootScope",
                                function ($scope, productSvc, $rootScope) {

            //$scope.products = productSvc.products();

            $scope.addProduct = function (product) {
                productSvc.addProductForCheckout(product);
                $rootScope.$broadcast("PRODUCT_ADDED_CART", {
                    data: product
                });
            };



            productSvc.getProductsFromPromise()
                .then(function (response) {
                    console.log(response);
                    $scope.products = response;
                })
                .catch(function (response) {
                    console.log(response);
                });



            productSvc.getWallMartProducts()
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                })
            console.log("I am in the regularmode");

}]);
