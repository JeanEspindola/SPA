/**
 * Controller for year-details panel view.
 *
 **/
(function() {
    'use strict';
    angular
        .module('mobiquity.component.yearDetails')
        .controller('mobiquity.component.yearDetails.yearDetailsController', yearDetailsController);

    yearDetailsController.$inject = [
        '$scope'
    ];

    function yearDetailsController($scope){

        //Gets the local scope.
        var vm = this;

        function init(){

            //Gets all the info from the panel factory
            vm.info = $scope.info;
        }

        init();
    }
})();