angular.module("products")
    .service("productSvc", ["$http", "$q",
                            function ($http, $q) {
            this.products = function () {
                $http.get("app/data/products.json")
                    .then(function (response) {
                        console.log(response);
                    }).catch(function (response) {
                        console.log(response);
                    });
            };

            var productsForCheckout = [];

            this.getProductsFromPromise = function () {
                var dfd = $q.defer();

                $http.get("app/data/products.json")
                    .then(function (response) {
                        dfd.resolve(response.data.products);
                    }).catch(function (response) {
                        console.log(response);
                    });

                return dfd.promise;

            };

            this.addProductForCheckout = function (item) {
                productsForCheckout.push(item);

            };

            this.getSelectedProducts = function () {
                return productsForCheckout;
            };


            this.getWallMartProducts = function () {
                var url = "http://api.walmartlabs.com/v1/search?query=ipod&format=json&apiKey=yjrruzc9fgbxvs28qw2rjczv";
                var dfd = $q.defer();
                $http.get(url)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (response) {
                        console.log(response);
                    });

                return dfd.promise;

            };

}]);
