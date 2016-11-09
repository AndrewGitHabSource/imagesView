'use strict';

module.exports =
    angular.module('expressly', [
        'ngRoute',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'ui.router',
        'ngResource',
        'pascalprecht.translate',

        // html templates in $templateCache
        require('../../../tmp/templates').name,

        // common directives, filters, services
        require('../common').name,

        // modules
        require('./photoViewer').name
    ])
        .config(/*@ngInject*/ function ($translateProvider) {
            $translateProvider.preferredLanguage('en');
        });
