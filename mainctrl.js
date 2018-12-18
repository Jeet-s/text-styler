
var app = angular.module("myApp");
app.controller("mainctrl", mainctrl);
function mainctrl($scope, fonts){
    $scope.text = "Text";
    $scope.fontsArray=fonts;
    $scope.fontsize = 20;
    $scope.letterspace = 0;
    $scope.wordspace = 0;
    $scope.shadowintensity = 0;
    $scope.shadowcolor = "black";
    $scope.styles = {
        "color": "red",
        "font-family": "times new roman",
        "font-size": "20px",
        "letter-spacing": "0px",
        "word-spacing": "0px",
        "text-shadow": "0 0 0px #000"
    };
    $scope.changesize = function(){
        document.getElementById("ta").style.fontSize = $scope.fontsize+"px";
        $scope.styles['font-size'] = $scope.fontsize+"px";
    }
    $scope.changels = function(){
        document.getElementById("ta").style.letterSpacing = $scope.letterspace+"px";
        $scope.styles['letter-spacing'] = $scope.letterspace+"px";
    }
    $scope.changews = function(){
        document.getElementById("ta").style.wordSpacing = $scope.wordspace+"px";
        $scope.styles['word-spacing'] = $scope.wordspace+"px";
    }
    $scope.changeshadow = function(){
        document.getElementById("ta").style.textShadow = "0 0 "+$scope.shadowintensity+"px "+$scope.shadowcolor;
        $scope.styles['text-shadow'] = "0 0 "+$scope.shadowintensity+"px "+$scope.shadowcolor;
    }
    
}
