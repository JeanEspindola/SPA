/**
 * System Service Model.
 *
 * Holds system information
 * It works like a singleton, serving to store data for the view-controller.
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.core')
        .service('mobiquity.core.systemModelService', systemModelService);

    systemModelService.$inject = [
        '$q',
        '$filter',
        'mobiquity.core.championsDataservice',
        'mobiquity.core.yearRacesListDataservice'
    ];

    function systemModelService($q, $filter, ChampionsDataservice, YearRacesListDataservice) {

        var vm = this;

        //Declaring methods on the top and implementing them later.
        //Best practices
        vm.initChampionsList = initChampionsList;
        vm.checkYearRaceWinners = checkYearRaceWinners;
        vm.setYearRaceWinners = setYearRaceWinners;

        vm.championsList = [];
        vm.yearsRacesList = [];

        //Instantiate dataservices
        vm.championsService = new ChampionsDataservice();
        vm.yearRacesService = new YearRacesListDataservice();

        //Initialize the champions list information
        function initChampionsList() {
            var deferred = $q.defer();

            var self = this;

            vm.championsService.getChampionsList().then(
                function(championsList){
                    var championsListFiltered = $filter('championsListFilter')(championsList);
                    self.championsList = championsListFiltered;

                    deferred.resolve(self.championsList);
                },
                function(err){
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }

        //Checks and return the stored value for the race year list
        function checkYearRaceWinners(season) {
            return $filter('yearRacesResult')(vm.yearsRacesList, season);
        }

        //Adds the filtered information for the year in an array
        function setYearRaceWinners(season, yearRacesFiltered) {
            vm.yearsRacesList.push({
                season: season,
                results: yearRacesFiltered
            });
        }

    }
})();
