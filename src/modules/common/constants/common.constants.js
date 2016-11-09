module.exports = /*@ngInject*/
    function constCollection() {
        return {
            "urlPhotos": "http://jsonplaceholder.typicode.com/photos",
            "urlAlbum": "http://jsonplaceholder.typicode.com/albums/:album_id/photos",
            "urlPhoto": "http://jsonplaceholder.typicode.com/photos/:photo_id"
        };
    };