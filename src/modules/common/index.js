'use strict';

module.exports =
  angular.module('photo.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name,
    require('./constants').name
  ]);
