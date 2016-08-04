angular.module("products")
    .service("productSvc", ["$http", function ($http) {
        this.products = function () {
            $http.get("app/data/products.json")
                .then(function (response) {
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                });
        };

        var productsForCheckout = [];


        this.addProductForCheckout = function (item) {
            productsForCheckout.push(item);

        };

        this.getSelectedProducts = function () {
            return productsForCheckout;
        };

}]);
