/**
 * Filter for year race results.
 * It gets the original response and prepares for storing in the model service the results for a given year.
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.core')
        .filter('yearRacesListFilter', filter);

    filter.$inject = [];

    function filter() {

        /*
        * Receives the response from the HTTP call and filters to store better information for
        * data manipulation in the view-controller.
        * */
        return function(yearRacesList) {

            var yearResults = [];

            for (var i = 0; i < yearRacesList.length; i++) {

                var yearRace = yearRacesList[i];
                var raceResults = yearRace.Results[0];

                yearResults.push({
                    round: yearRace.round,
                    raceName: yearRace.raceName,
                    driverId: raceResults.Driver.driverId,
                    firstName: raceResults.Driver.givenName,
                    lastName: raceResults.Driver.familyName
                });
            }

            return yearResults;
        };
    }
})();