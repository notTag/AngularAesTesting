angular.module('app').controller('BannerCtlr', function ($scope) {
    $(function(){
        $("#banner").typed({
          strings: ["nicktag.tech is currently under Maintenance.", "Nick Tagliasacchi is getting ready for hire!", "hi."],
          typeSpeed: 0.1,
          loop: true
        });
    });
});