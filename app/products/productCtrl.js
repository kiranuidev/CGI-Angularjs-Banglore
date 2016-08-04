angular.module("products")
    .controller("productCtrl", ["$scope", "productSvc",
                                function ($scope, productSvc) {

            $scope.products = productSvc.products;

            $scope.addProduct = function (product) {
                productSvc.addProductForCheckout(product);
            }
}]);
