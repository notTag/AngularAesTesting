angular.module("app").controller('MacroCtrl', function($scope) {
    $scope.bodyWeight;
    $scope.caloricMaintenance;
    $scope.calculateMacros = function(){
//        maintenance+=maintenanceModifier;
        $scope.protein = $scope.bodyWeight;
        $scope.proCals = $scope.protein*4; //4 cals per gram of protein
        
        $scope.fats = $scope.bodyWeight*.45;
        $scope.fatCals = $scope.fats*9;               //9 cals per gram of protein
        $scope.carbCals = $scope.caloricMaintenance - ($scope.proCals+$scope.fatCals);
        $scope.carbs = $scope.carbCals/4;            //4 cals per gram of carb 
        
        console.log("Protein: " + $scope.protein);
        console.log("Carbs: "   + $scope.carbs);
        console.log("Fats: "    + $scope.fats);
    }
});