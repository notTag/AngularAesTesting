/* global angular */

var myApp = angular.module('myApp', ['mdo-angular-cryptography']);

myApp.config(function ($cryptoProvider) {
    $cryptoProvider.setCryptographyKey('ABCD123');
});

myApp.controller('EncryptCtrl', function ($scope, $crypto) {
    $scope.keyTwo = "my second key";
    $scope.dateActualTwo = "2/25/2016";
    $scope.dateEncryptedTwo = $crypto.encrypt($scope.dateActualTwo, $scope.keyTwo);
    $scope.dateDecryptedTwo = $crypto.decrypt($scope.dateEncryptedTwo, $scope.keyTwo);

    $scope.randomAscii = function(){
        return String.fromCharCode(97 + Math.floor(Math.random()*100)+1);
    };
    
    $scope.elements = [];
    for(var i=1 ; i<=20; i++){
        var key = $scope.randomAscii() + $scope.randomAscii() + $scope.randomAscii() + $scope.randomAscii();
        var dateActual = (Math.floor(Math.random()*12)+1) + "/" + (Math.floor(Math.random()*30)+1) + "/" + (Math.floor(Math.random()*45)+1975);
        var dateEncrypted = $crypto.encrypt(dateActual, key);
        var dateDecrypted = $crypto.decrypt(dateEncrypted, key);
        
        $scope.elements.push({
            "name": "Item " + i,
            "dateActual": dateActual,
            "dateEncrypted": dateEncrypted,
            "dateDecrypted": dateDecrypted,
            "key": key
        });
        
    }
    
    $scope.number = 100;
    $scope.getNumber = function(num){
        return new Array(num);
    };
    
    $scope.getNumberOfDigits = function(num){
        return Math.ceil(Math.log10(num));
    }

    $scope.BigIntegerFibonacciBottomUp = function(n){
	if(n<=2){ return 1; }
	var a = 1;
	var b = 1;
	for(var i=3; i<=n; i++){ 
		var c = bigInt(a.toString()).add(bigInt(b.toString()));
		a = b;
		b = c;
	}
	return c.value;
    };
    
    $scope.fibBottomUp = function(n){
	if(n<=2){ return 1; }
	var a = 1;
	var b = 1;
	for(var i=3; i<=n; i++){ 
		var c = a + b;
		a = b;
		b = c;
	}
	return c;
    };
    
    $scope.setUpPlayer = function(){
        jwplayer("container").setup({
            flashplayer: "lib/player.swf",
            file: "video/FailFoward.mp4",
            height: 270,
            width: 480
        });
    }
    
});