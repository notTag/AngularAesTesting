angular.module("app").controller('MacroCtrl', function($scope) {
    $scope.bodyWeight;
    $scope.caloricMaintenance;
    $scope.protein = {
        val: 0,
        cals: 0,
        mod: 1,
        calsPerGram: 4
    };
    $scope.fats = {
        val: 0,
        cals: 0,
        mod: 45,
        calsPerGram: 9
    };
    $scope.carbs = {
        val: 0,
        cals: 0,
        mod: 0,
        calsPerGram: 4
    };
    
    $scope.calculateMacros = function () {
        $scope.calculateProtein();
        $scope.calculateFats();
        $scope.calculateCarbs();
    };

    $scope.calculateProtein = function () {
        $scope.protein.val = $scope.bodyWeight * $scope.protein.mod;
        $scope.protein.cals = $scope.protein.val * $scope.protein.calsPerGram;
        
        console.log("Protein: " + $scope.protein);
    };
    $scope.calculateFats = function () {
        console.log("Fat Slider Val: " + $scope.fats.mod / 100);
        
        var fatGrams = $scope.bodyWeight * ($scope.fats.mod/100);
        $scope.fats.val = Math.round(fatGrams*1000)/1000;
        
        var fatCals = $scope.fats.val * $scope.fats.calsPerGram;
        $scope.fats.cals = Math.round(fatCals*1000)/1000;
        
        console.log("Carbs: " + $scope.carbs);
    };
    $scope.calculateCarbs = function () {
        var carbCals = $scope.caloricMaintenance - ($scope.protein.cals + $scope.fats.cals);
        $scope.carbs.cals = Math.round(carbCals * 1000) / 1000;
        
        $scope.carbs.val = $scope.carbs.cals / $scope.carbs.calsPerGram;
        
        console.log("Fats: " + $scope.fats);
    };
});