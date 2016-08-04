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

                var items = [
                    {
                        "id": "1",
                        "model": "Tom",
                        "name": "Cruise",
                        "description": "AAAA",
                        "price": 2000
      },
                    {
                        "id": "1",
                        "model": "KIN",
                        "name": "JOO",
                        "description": "abbbb",
                        "price": 2000
      }];

                if (items) {
                    dfd.resolve(items)
                } else {
                    dfd.reject("there are no items");
                }

                return dfd.promise;

            };

            this.addProductForCheckout = function (item) {
                productsForCheckout.push(item);

            };

            this.getSelectedProducts = function () {
                return productsForCheckout;
            };

}]);
