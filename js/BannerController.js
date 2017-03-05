angular.module('app').controller('BannerCtlr', function ($scope) {
    $(function(){
        $(".typingBannerText").typed({
          strings: ["nicktag.tech is currently under Maintenance.", "Nick Tagliasacchi is getting ready for hire!", "Nick Tagliasacchi"],
          typeSpeed: 0.1,
          loop: true
        });
    });
});