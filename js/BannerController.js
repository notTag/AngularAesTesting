angular.module('app').controller('BannerCtlr', function ($scope) {
    $(function () {
        $(".typingBannerText").typed({
            strings: ["nicktag.tech is currently under Maintenance. ", "Nick Tagliasacchi is getting ready for hire! ", "Nick Tagliasacchi "],
            typeSpeed: 20,
            loop: false,
            loopCount: 2,
            cursorChar: "<div id=\"pacman\" class=\"pacmanRight\"></div>",
            preStringTyped: function () {
                $("#pacman").removeClass("pacmanLeft");
                $("#pacman").addClass("pacmanRight");
            },
            onStringTyped: function () {
                $("#pacman").removeClass("pacmanRight");
                $("#pacman").addClass("pacmanLeft");
            }
        });
    });
});