'use strict';

module.exports = /*ngInject*/
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/photoViewer/templates/main.html',
            controller: 'mainController as ctrl'
        }).state('album', {
            url: '/album/:id',
            templateUrl: 'app/photoViewer/templates/album.html',
            controller: 'albumController as ctrl'
        }).state('photo', {
            url: '/photo/:id',
            templateUrl: 'app/photoViewer/templates/photo.html',
            controller: 'photoController as ctrl'
        });
            
    };
