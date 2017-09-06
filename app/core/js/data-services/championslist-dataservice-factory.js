/**
 *  Champions List Dataservice
 *
 *  It handles all http requests for the champions list.
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.core')
        .factory('mobiquity.core.championsDataservice', championsDataserviceFactory);

    championsDataserviceFactory.$inject = ['$http', 'mobiquity.core.baseUtils'];

    function championsDataserviceFactory($http, baseUtils) {

        /* Constructor */
        function championsDataservice() {

            //Build the base URL to get champions list
            this.baseChampionsURL = baseUtils.baseURL + baseUtils.championsListURL;
            //Holds fixed query parameters to be used in the GET.
            this.queryParams = '?limit=11&offset=55';
        }

        /* Implementation */

        championsDataservice.prototype.getChampionsList = function() {
            var url = this.baseChampionsURL + baseUtils.responseJSON;
            url = url + this.queryParams;

            //Passes an attr array
            //These values will be used to return the response
            var attr = ['StandingsTable', 'StandingsLists'];

            return baseUtils.handleResponse($http.get(url), attr);
        };

        return championsDataservice;

    }
})();