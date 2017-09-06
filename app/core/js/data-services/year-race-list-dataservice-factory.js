/**
 *  Year Race List Dataservice
 *
 *  It handles all http requests for the year race List.
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.core')
        .factory('mobiquity.core.yearRacesListDataservice', yearRacesListDataserviceFactory);

    yearRacesListDataserviceFactory.$inject = ['$http', 'mobiquity.core.baseUtils'];

    function yearRacesListDataserviceFactory($http, baseUtils) {

        /* Constructor */
        function yearRacesListDataservice() {

            //Build the base URL to get year race details
            this.baseYearRacesURL = baseUtils.baseURL + ':year' + baseUtils.yearRaceWinnersURL;
        }

        /* Implementation */

        yearRacesListDataservice.prototype.getYearRacesList = function(year) {

            //Replace the year in the url by the passes parameter
            var url = this.baseYearRacesURL.replace(':year', year);
            url = url + baseUtils.responseJSON;

            //Passes an attr array
            //These values will be used to return the response
            var attr = ['RaceTable', 'Races'];

            return baseUtils.handleResponse($http.get(url), attr);
        };

        return yearRacesListDataservice;

    }
})();