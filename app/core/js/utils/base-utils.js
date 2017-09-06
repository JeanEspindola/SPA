/**
 *  Base Utils
 *
 *  It provides constants and utilities for the http requests.
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.core')
        .factory('mobiquity.core.baseUtils', baseUtils);

    baseUtils.$inject = [
        '$q'
    ];

    function baseUtils($q) {

        /*Holds constans and methods to be used and implemented later*/
        var methods = {

            /*URL Constants*/
            baseURL: 'http://ergast.com/api/f1/',

            championsListURL: 'driverStandings/1',

            yearRaceWinnersURL: '/results/1',

            responseJSON: '.json',

            /*Methods*/
            handleResponse: handleResponse
        };

        /* Implementation */

        //Generic function to handle http responses (GET only in this case, but
        //it could be used for POST as well.
        function handleResponse(response, attribute) {
            var deferred = $q.defer();

            //Uses promises for handling all http requests
            //With that we are able to threat success and errors cases.
            response.then(
                // Success
                function(res) {
                    //Check the response return, and if valid, resolve it.
                    if (res.data.MRData){
                        //Append the attribute values to help resolve the response
                        deferred.resolve(res.data.MRData[attribute[0]][attribute[1]]);
                    } else {
                        deferred.reject({applicationCode: {code: 'GENERIC_ERROR', typeCode: 'error'}});
                    }

                },
                //error
                function() {
                    deferred.reject({applicationCode: {code: 'GENERIC_ERROR', typeCode: 'error'}});
                }
            );

            return deferred.promise;
        }

        return methods;

    }
})();