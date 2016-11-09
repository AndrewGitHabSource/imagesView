'use strict';

module.exports = /*@ngInject*/
    function photoController($scope, photoService, constCollection, $state) {
        var ctrl = this,
            photoServiceRest = new photoService(),
            idPhoto = $state.params.id;
        
        ctrl.image = photoServiceRest.getPhoto(idPhoto);
    };