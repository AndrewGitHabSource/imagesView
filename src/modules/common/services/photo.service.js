'use strict';

module.exports = /*@ngInject*/
    function photoService($rootScope, restService, constCollection) {
        return function () {
            var lastImage = 9,
                photoService = new restService(),
                images = [];
            
            
            /* Functions */

            function error(e) {
                console.log(e);
            }

            var getPhotos = function (url, start, end, idAlbum) {
                start = start || 1;
                end = end || lastImage;
                
                

                function successGetPhoto(response) {
                    for (var i = 0; i < response.data.length; i++) {
                        images.push(response.data[i]);
                    }
                }

                if(idAlbum){
                    photoService.query(constCollection.urlAlbum, {album_id: idAlbum, _start: start, _limit: end}, {}, successGetPhoto, error);
                }
                else{
                    photoService.query(constCollection.urlPhotos, {_start: start, _limit: end}, {}, successGetPhoto, error);
                }
                

                return images;
            };
            
            

            this.getPhotoAlbum = function (idAlbum, start, end) {
                return getPhotos(constCollection.urlAlbum, start, end, idAlbum);
            };

            this.getAllPhotos = function (start, end) {
                return getPhotos(constCollection.urlPhotos, start, end);
            };

            this.getPhoto = function (photoId) {
                function successGetPhoto(response) {
                    return response;
                }

                return photoService.get(constCollection.urlPhoto, {photo_id: photoId}, {}, successGetPhoto, error);
            };

        };
    };