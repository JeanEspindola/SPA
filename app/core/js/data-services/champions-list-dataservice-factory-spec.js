'use strict';
ngDescribe({
    name: 'champions-list-dataservice-factory-spec.js',
    modules: [
        'mobiquity.core',
        'mock/championsListResult.json'
    ],
    inject: [
        'mobiquity.core.championsDataservice',
        '$httpBackend',
        '$q',
        'mockedData',
        'mockChampionsListResult'
    ],
    mocks: {
        'mobiquity.core': {
            'mockedData': {
                regexp: {
                    'getDriverStandings': /^\/ergast.com\/api\/f1\/driverStandings\/1.json\?.*/
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
            deps.championsDataservice = new deps['mobiquity.core.championsDataservice']();
        });

        it('Champions dataservice should be loaded', function() {
            expect(deps.championsDataservice).toBeDefined();
        });

        it('It should call getChampionsList - with success', function() {
            deps.$httpBackend.whenGET(deps.mockedData.regexp.getDriverStandings).respond(deps.mockChampionsListResult);
            deps.championsDataservice.getChampionsList().then(
                function(result) {
                    expect(result).toEqual(deps.mockChampionsListResult.StandingsTable.StandingsLists);
                }
            );
        });

        it('It should call getChampionsList - with error 500', function() {
            deps.$httpBackend.whenGET(deps.mockedData.regexp.getDriverStandings).respond(500, 'error');

            deps.championsDataservice.getChampionsList().then(
                deps.mockedData.failedPromise,
                function(result) {
                    expect(result).toEqual(deps.mockedData.response.error);
                }
            );
        });

    /*    afterEach(function() {
            deps.$httpBackend.flush();
            deps.$rootScope.$digest();
            //deps.$httpBackend.verifyNoOutstandingExpectation();
            deps.$httpBackend.verifyNoOutstandingRequest();
        });*/
    }
});
