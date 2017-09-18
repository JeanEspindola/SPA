/**
 * The slide-in panel factory.
 * It calls the external library to open up the slide in with years race details
 *
 **/
(function() {
    'use strict';

    angular
        .module('mobiquity.component.yearDetails')
        .factory('mobiquity.component.yearDetails.panelFactory', panelFactory);

    panelFactory.$inject = [
        'angularSlideOutPanel'
    ];

    function panelFactory(angularSlideOutPanel) {

        var methods = {
            show: show,
            modalController: modalController
        };

        return methods;

        function show(season, driverId, driverName, results) {

            var template = '/app/components/year-details/views/year-details.html';

            angularSlideOutPanel.open({
                templateUrl: template,
                openOn: 'right',
                controller: [
                    '$scope',
                    'info',
                    modalController
                ],
                resolve: {
                    info: [
                        function() {
                            return {
                                season: season,
                                driverId: driverId,
                                driverName: driverName,
                                results: results
                            };
                        }
                    ]
                }
            });

        }

        /*
        * Code may look strange in comparison with all the rest.
        * Following the guidelines provided by the library documentation
        *
        * */
        function modalController($scope, info) {
            $scope.closePanel = function() {
                $scope.$panelInstance.close();
            };

            $scope.info = info;
        }
    }
})();