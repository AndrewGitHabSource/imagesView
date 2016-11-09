'use strict';

module.exports =
    angular.module('expressly.common.directives', [])
        .directive('whenScrolled', require('./whenScrolled.directive'));
