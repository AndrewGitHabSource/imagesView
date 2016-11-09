'use strict';

module.exports = /*ngInject*/
    function ($translateProvider) {
        $translateProvider.translations('en', {
            HELLO: 'Photo Viewer {{value}}'
        });

        $translateProvider.preferredLanguage('en');
    };