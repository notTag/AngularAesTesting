/* global angular */
var app = angular.module('app', ['ngLess', 'mdo-angular-cryptography']);

app.config(function ($cryptoProvider) {
    $cryptoProvider.setCryptographyKey('ABCD123');  
});
