/* global angular */
var app = angular.module('app', ['mdo-angular-cryptography']);

app.config(function ($cryptoProvider) {
    $cryptoProvider.setCryptographyKey('ABCD123');
});
