/**
 * Main Angular Module
 */
var MainApp = angular.module('MainApp', ['ngResource','ngAnimate','uiGmapgoogle-maps']);
var App = MainApp;
    
MainApp.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
});

/**
 * Init Sidebar
 */
$(function() {
    $('#side-menu').metisMenu()
});
