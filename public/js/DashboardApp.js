/**
 * Main Angular Module
 */
var DashboardApp = angular.module('DashboardApp', ['ngResource','ngRoute','ngAnimate','uiGmapgoogle-maps']);
var App = DashboardApp;

/**
 * Main Configs
 */
DashboardApp.config(function($routeProvider, $compileProvider) {
    $routeProvider.
        when('/', { redirectTo: '/dashboard' }).
        when('/dashboard', {
            controller: 'DashboardController',
            templateUrl: '/js/views/example_footer.html'
        }).
        otherwise({redirectTo: '/'});

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|coui):/);
    })
    .run(function($rootScope) {
    });

DashboardApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});

/**
 * Init Sidebar
 */
$('#side-menu').metisMenu();
