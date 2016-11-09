'use strict';

module.exports = /*@ngInject*/
    function restService($rootScope, $resource, constCollection) {
        return function () {

            this.get = get;
            this.query = query;




            /* FUNCTIONS */

            /* Get data from server */
            function init(url, params, data, successFunction, errorFunction, headers) {

                var emptyFunc = function () {},
                    res;

                url = url || constCollection.url;
                params = params || {};
                data = data || {};
                successFunction = successFunction || emptyFunc;
                errorFunction = errorFunction || emptyFunc;
                headers = headers || {};


                res = $resource(url, params, {
                    get: {
                        method: 'GET',
                        headers: headers,
                        interceptor: {
                            response: successFunction,
                            responseError: function (resp) {
                                errorFunction(resp);
                                if (resp.status === 401) {
                                    window.alert('bad token');
                                }
                            }
                        },
                        isArray: false
                    },
                    query: {
                        method: 'GET',
                        headers: headers,
                        interceptor: {
                            response: successFunction,
                            responseError: function (resp) {
                                errorFunction(resp);
                                if (resp.status === 401) {
                                    window.alert('bad token');
                                }
                            }
                        },
                        isArray: true
                    }
                });

                return res;
            }

            function get(url, params, data, successFunction, errorFunction, headers) {

                return init(url, params, data, successFunction, errorFunction, headers).get(data);

            }

            function query(url, params, data, successFunction, errorFunction, headers) {

                return init(url, params, data, successFunction, errorFunction, headers).query(data);

            }
        };
    };
