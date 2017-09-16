'use strict';
ngDescribe({
    name: 'system-model-service-spec.js',
    modules: [
        'mobiquity.core',
        'mock/championsListResult.json',
        'mock/championsListFiltered.json'
    ],
    inject: [
        '$httpBackend',
        'mobiquity.core.systemModelService',
        'mockChampionsListResult',
        'mockChampionsListFiltered',
        'mockedData'
    ],
    mocks: {
        'mobiquity.core': {
            'mockedData': {
                regexp: {
                    'getDriverStandings': /http:\/\/ergast.com\/api\/f1\/driverStandings\/1.json\?limit=11&offset=55/
                },
                response: {
                    'error': {applicationCode: {code: 'GENERIC_ERROR', typeCode: 'error'}}
                },
                failedPromise: function() {
                    expect(false).toBe(true);
                }
            }
        }
    },
    tests: function(deps) {

        beforeEach(function() {
            deps.systemModel = deps['mobiquity.core.systemModelService'];
        });

        it('System model services should be defined', function() {
            expect(deps.systemModel).toBeDefined();
        });

        it('Should set yearRaceList array', function() {
            deps.systemModel.setYearRaceWinners('2005', 'results');
            expect(deps.systemModel.yearsRacesList[0]).toEqual({season: '2005', results: 'results'});
        });

        it('It should initilize champions list - success', function() {
            deps.$httpBackend.expectGET(deps.mockedData.regexp.getDriverStandings).respond(deps.mockChampionsListResult);
            deps.systemModel.initChampionsList().then(
                function(result) {
                    expect(result).toEqual(deps.mockChampionsListFiltered);
                }
            );

            deps.$httpBackend.flush();
        });

        it('It should initilize champions list - error', function() {
            deps.$httpBackend.expectGET(deps.mockedData.regexp.getDriverStandings).respond(500, 'error');
            deps.systemModel.initChampionsList().then(
                deps.mockedData.failedPromise,
                function(result) {
                    expect(result).toEqual(deps.mockedData.response.error);
                }
            );

            deps.$httpBackend.flush();
        });

    }
});