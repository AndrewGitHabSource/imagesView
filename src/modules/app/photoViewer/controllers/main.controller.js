'use strict';

module.exports = /*@ngInject*/
    function mainController($scope, photoService) {
        var ctrl = this,
            countIteration = 6,
            lastImage = 9,
            photoServiceRest = new photoService();

        ctrl.images = [];
        
        ctrl.images = photoServiceRest.getAllPhotos();
        

        ctrl.loadMore = function () {
            ctrl.images = photoServiceRest.getAllPhotos(lastImage, countIteration);
            lastImage += countIteration;
        };
    };