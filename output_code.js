var app = angular.module("myApp");
app.directive("outputCode", function(){
    return {
        templateUrl: 'code.html',
        restrict: 'AE',
        scope: {
            styles: "="
        }
    }
});