angular.module("app").controller('MacroCtrl', function($scope) {
    $scope.bodyWeight = 0;
    $scope.caloricMaintenance = 0;
    $scope.protein = {
        val: 0,
        cals: 0,
        mod: 100,
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
        console.log("Protein Slider Val: " + $scope.protein.mod / 100);
        var proteinGrams = Math.abs($scope.bodyWeight * ($scope.protein.mod/100));
        $scope.protein.val = Math.round(proteinGrams*1000)/1000;
        var proteinCals = $scope.protein.val * $scope.protein.calsPerGram;
        $scope.protein.cals = Math.round(proteinCals*1000)/1000;
        
        console.log("Protein: " + $scope.protein);
    };
    $scope.calculateFats = function () {
        console.log("Fat Slider Val: " + $scope.fats.mod / 100);
        
        var fatGrams = $scope.bodyWeight * ($scope.fats.mod/100);
        if(fatGrams > 0){
            $scope.fats.val = Math.round(fatGrams*1000)/1000;
        
            var fatCals = $scope.fats.val * $scope.fats.calsPerGram;
            $scope.fats.cals = Math.round(fatCals*1000)/1000;
        } else {
            $scope.fats.val = 0;
            $scope.fats.cals = 0;
        }
        
        
        console.log("Fats: " + $scope.fats);
    };
    $scope.calculateCarbs = function () {
        var carbCals = $scope.caloricMaintenance - ($scope.protein.cals + $scope.fats.cals);
        if(carbCals > 0){
            $scope.carbs.cals = Math.round(carbCals * 1000) / 1000;
            $scope.carbs.val = $scope.carbs.cals / $scope.carbs.calsPerGram;
        } else {
            $scope.carbs.cals = 0;
            $scope.carbs.val = 0;
        }
        
        console.log("Carbs: " + $scope.carbs);
    };
});