/**
 * Filter for champions List information.
 * It gets the original response and prepares for a better handling in the view controller.
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.core')
        .filter('championsListFilter', filter);

    filter.$inject = [];

    function filter() {

        return function(championsList) {

            var championsListFiltered = [];

            for (var i = 0; i < championsList.length; i++) {

                var championYear = championsList[i];
                var driverInfo = championYear.DriverStandings[0];

                championsListFiltered.push({
                    season: championYear.season,
                    wins: driverInfo.wins,
                    points: driverInfo.points,
                    driverId: driverInfo.Driver.driverId,
                    firstName: driverInfo.Driver.givenName,
                    lastName: driverInfo.Driver.familyName
                });
            }

            return championsListFiltered;
        };
    }
})();