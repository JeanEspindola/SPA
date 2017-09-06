/**
 * Main Controller
 *
 * It handles the main page application and controlls the loading and app layer.
 *
 **/
(function() {
    'use strict';
    angular
        .module('mobiquity')
        .controller('mobiquity.mainController', mainController);

    mainController.$inject = ['$scope'];

    function mainController($scope){
        //It is a good practice to get the scope (this) and use inside of a variable
        //I use this approach all accross the classes
        var vm = this;

        init();

        function init() {
            vm.isAppLoaded = false;
            vm.isLoading = false;
            vm.isError = false;
        }

        //Using ui.router to provide/control route changes
        //Very important thing for Single Page Applications.
        //Even though only one is in place.
        $scope.$on('$stateChangeStart', function() {
            vm.isLoading = true;
            vm.isError = false;
        });

        $scope.$on('$stateChangeSuccess', function() {
            vm.isLoading = false;
            vm.isError = false;
            vm.isAppLoaded = true;
        });

        $scope.$on('$stateChangeError', function() {
            vm.isLoading = false;
            vm.isError = true;
        });
    }
})();