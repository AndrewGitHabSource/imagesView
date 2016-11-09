'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, restService, constCollection, $state, photoService) {
        var ctrl = this,
            countIteration = 6,
            lastImage = 9,
            idAlbum = $state.params.id,
            photoServiceRest = new photoService();

        ctrl.images = photoServiceRest.getPhotoAlbum(idAlbum);
        
        ctrl.loadMore = function () {
            ctrl.images = photoServiceRest.getPhotoAlbum(idAlbum, lastImage, countIteration);
            lastImage += countIteration;
        };
        
    };