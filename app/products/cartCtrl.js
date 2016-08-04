angular.module("products")
    .controller("cartCtrl", ["$scope", "productSvc",
                                function ($scope, productSvc) {

            $scope.cartProducts = productSvc.getSelectedProducts();


}]);
