'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('restService', require('./rest.service'))
        .factory('photoService', require('./photo.service'));


