'use strict';
ngDescribe({
    name: 'year-details-controller-spec.js',
    module: ['mobiquity.component.yearDetails'],
    inject: [
        '$q',
        '$httpBackend'

    ],

    tests: function(deps) {
        var scope, controller;

        beforeEach(inject(function($rootScope, $controller) {

            scope = $rootScope.$new();
            scope.info = {};

            controller = $controller('mobiquity.component.yearDetails.yearDetailsController', {
                $scope: scope
            });
        }));

        it('Controller and scope should be initialized', function() {
            expect(controller).toBeDefined();
            expect(scope).toBeDefined();
        });
    }
});
