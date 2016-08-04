angular.module("components", []);


angular.module("components")
    .directive("cgiTitle", [function () {

        return {
            template: "CGI",
            restrict: "AEC"
        };

}]);

angular.module("components")
    .directive("cgiHeader", [function () {

        return {
            templateUrl: "app/templates/header.html",
            restrict: "AEC"
        };

}]);



angular.module("components")
    .directive("cgiNumbersOnly", [function () {

        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                /*console.log(scope);
                console.log(element);
                console.log(attrs);*/

                element.bind("keypress", function (evt) {
                    var keycode = evt.keyCode;
                    var length = attrs["inputlength"];
                    var data = this.value.length;
                    var reg = /^\d+$/;

                    var exp = new RegExp(reg);

                    if (!exp.test(evt.key)) {
                        evt.preventDefault();
                    }
                    /*if (data < length && (keycode >= 48 && keycode <= 57)) {

} else {
    evt.preventDefault();
}*/
                });
            }
        };
}]);
