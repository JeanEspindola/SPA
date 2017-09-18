/**
 * Main Controller of champions list page
 *
 **/
(function() {
    'use strict';
    angular
        .module('mobiquity.champions')
        .controller('mobiquity.champions.championsController', championsController);

    championsController.$inject = [
        '$scope',
        '$q',
        '$filter',
        'mobiquity.core.systemModelService',
        'mobiquity.core.yearRacesListDataservice',
        'mobiquity.component.yearDetails.panelFactory'
    ];

    function championsController($scope, $q, $filter, systemModelService, YearRacesListDataservice, panelFactory){

        //Gets the local scope.
        var vm = this;

        //Controls the loading overlay when opening the slide-in
        vm.isLoadingPane = false;

        //Declares all function on top
        //Implementation later
        vm.yearDetails = yearDetails;

        vm.yearRacesService = new YearRacesListDataservice();

        function init(){
            vm.championsList = systemModelService.championsList;
        }

        /*
        * Here I check if the year race values are already loaded for the given year.
        * If not, I make the call to get the values from the API, with that way, each year/season will be
        * called only once. After the promisse call, I store the values in the model, so next time the flow
        * will fall under the else loop.
        * Considering javascript is Async and we are dealing with promises here, I doubled the call to
        * open the panel factory.
        * */
        function yearDetails(champion) {
            vm.isLoadingPane = true;

            var driverName = champion.firstName + ' ' + champion.lastName;

            var results = systemModelService.checkYearRaceWinners(champion.season);

            var deferred = $q.defer();
            var yearRacesFiltered = null;

            if (results === null) {

                vm.yearRacesService.getYearRacesList(champion.season).then(
                    function(yearRacesList){

                        yearRacesFiltered = $filter('yearRacesListFilter')(yearRacesList);
                        systemModelService.setYearRaceWinners(champion.season, yearRacesFiltered);

                        panelFactory.show(champion.season, champion.driverId, driverName, yearRacesFiltered);
                        vm.isLoadingPane = false;
                        deferred.resolve(yearRacesFiltered);
                    },
                    function(err) {
                        vm.isLoadingPane = false;
                        deferred.reject(err);
                    }
                );
            } else {
                panelFactory.show(champion.season, champion.driverId, driverName, results);
                vm.isLoadingPane = false;
            }
        }

        init();
    }
})();