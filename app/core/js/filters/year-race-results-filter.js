/**
 * Filter for year race results list to get the result from an year.
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.core')
        .filter('yearRacesResult', filter);

    filter.$inject = [];

    function filter() {
        /*
        * Using the yearRaces array and the season, return only the values for the given year.
        * */
        return function(yearRacesResult, season) {

            var yearResults = null;

            for (var i = 0; i < yearRacesResult.length; i++) {

                var yearRaceResult = yearRacesResult[i];

                if (season === yearRaceResult.season) {
                    yearResults = yearRaceResult.results
                }
            }

            return yearResults;
        };
    }
})();