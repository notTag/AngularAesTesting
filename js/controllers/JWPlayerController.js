angular.module('app').controller('JWPlayerCtlr', function($scope){
     $scope.setUpPlayer = function(){
        jwplayer("container").setup({
            flashplayer: "lib/player.swf",
            file: "video/FailFoward.mp4",
            height: 270,
            width: 480
        });
    };
});  
   
    
