angular.module('app').controller('BigIntFibonacciCtrl', function ($scope) {
    $scope.number = 100;
    
    $scope.getNumber = function(num){
        return new Array(num);
    };
    
    $scope.getNumberOfDigits = function(num){
        return Math.ceil(Math.log10(num));
    };

    $scope.bigIntegerFibonacciBottomUp = function(n){
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
});


