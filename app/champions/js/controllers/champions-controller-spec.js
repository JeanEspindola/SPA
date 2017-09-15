'use strict';
ngDescribe({
    name: 'champions-controller-spec.js',
    module: [
        'mobiquity.champions'
    ],
    inject: [
        '$q',
        '$httpBackend'
    ],

    tests: function(deps) {
        var scope, controller;

        beforeEach(inject(function($rootScope, $controller) {

            scope = $rootScope.$new();

            controller = $controller('mobiquity.champions.championsController', {
                $scope: scope
            });
        }));

        it('Champions controller and scope should be initialized', function() {
            expect(controller).toBeDefined();
            expect(scope).toBeDefined();
        });
    }
});
