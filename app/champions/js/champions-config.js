/**
 * Champions List config.
 *
 * Responsible for configurating the route for the module
 * and resolve all necessary dependencies for this page.
 *
 **/
(function() {
    'use strict';
    angular
        .module('mobiquity.champions')
        .config(championsConfig);

    championsConfig.$inject = ['$stateProvider'];

    function championsConfig($stateProvider) {

        $stateProvider.state('championslist', {
            url: '/championslist',
            templateUrl: '/app/champions/views/champions.html',
            resolve: {
                championsList: resolveChampionsList
            },
            controller: 'mobiquity.champions.championsController',
            controllerAs: 'championsCtrl'
        });
    }

    /*
        Resolvers
        It handles all page dependencies before it load the route.
        For this case, waits till the http call is made to get the champions list
    */
    resolveChampionsList.$inject = ['mobiquity.core.systemModelService'];

    function resolveChampionsList(systemModelService) {
        return systemModelService.initChampionsList();
    }
})();