angular.module('app').controller('EncryptCtrl', function ($scope, $crypto) {
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
});
