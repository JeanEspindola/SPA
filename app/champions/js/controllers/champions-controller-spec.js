'use strict';
ngDescribe({
    name: 'champions-controller-spec.js',
    module: [
        'mobiquity.champions',
        'mock/championsListFiltered.json',
        'mock/yearRaceResults.json'
    ],
    inject: [
        '$q',
        '$httpBackend',
        'mockChampionsListFiltered',
        'mobiquity.core.systemModelService',
        'mobiquity.component.yearDetails.panelFactory',
        'mockedData',
        'mockYearRaceResults'
    ],
    mocks: {
        'mobiquity.champions': {
            'mockedData': {
                regexp: {
                    'yearsResult': /http:\/\/ergast.com\/api\/f1\/2005\/results\/1.json/
                },
                response: {
                    'error': {applicationCode: {code: 'GENERIC_ERROR', typeCode: 'error'}}
                }
            }
        }
    },
    tests: function(deps) {
        var scope, controller;

        beforeEach(inject(function($rootScope, $controller) {

            deps.systemModel = deps['mobiquity.core.systemModelService'];
            deps.panelFactory = deps['mobiquity.component.yearDetails.panelFactory'];

            spyOn(deps.panelFactory, 'show');

            scope = $rootScope.$new();

            controller = $controller('mobiquity.champions.championsController as vm', {
                $scope: scope
            });
        }));

        it('Champions controller and scope should be initialized', function() {
            expect(controller).toBeDefined();
            expect(scope).toBeDefined();
        });

        it('Should call year Details - results already stored', function() {

            deps.systemModel.yearsRacesList = [
                {season: '2005', results: [{test: '2005'}]},
                {season: '2007', results: [{test: '2007'}]},
                {season: '2009', results: [{test: '2009'}]},
                {season: '2011', results: [{test: '2011'}]}
            ];

            var champion = deps.mockChampionsListFiltered[0];

            scope.vm.yearDetails(champion);

            expect(scope.vm.isLoadingPane).toBeFalsy();
            expect(deps.panelFactory.show).toHaveBeenCalledWith('2005', 'alonso', 'Fernando Alonso', [{test: '2005'}]);
        });

        it('Should call year Details - success - results not stored yet', function() {

            deps.$httpBackend.whenGET(deps.mockedData.regexp.yearsResult).respond(deps.mockYearRaceResults);

            var champion = deps.mockChampionsListFiltered[0];

            scope.vm.yearDetails(champion);

            deps.$httpBackend.flush();

            expect(scope.vm.isLoadingPane).toBeFalsy();
            expect(deps.panelFactory.show).toHaveBeenCalled();
        });

        it('Should call year Details - error - results not stored yet', function() {

            deps.$httpBackend.whenGET(deps.mockedData.regexp.yearsResult).respond(deps.mockedData.response.error);

            var champion = deps.mockChampionsListFiltered[0];

            scope.vm.yearDetails(champion);

            deps.$httpBackend.flush();

            expect(scope.vm.isLoadingPane).toBeFalsy();
            expect(deps.panelFactory.show).not.toHaveBeenCalled();

        });
    }
});
