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
            deps.championsDataservice = new deps['mobiquity.core.championsDataservice']();
        });

        it('Champions dataservice should be loaded', function() {
            expect(deps.championsDataservice).toBeDefined();
        });

        it('It should call getChampionsList - with success', function() {
            deps.$httpBackend.whenGET(deps.mockedData.regexp.getAllRegex).respond(deps.mockChampionsListResult);
            deps.championsDataservice.getChampionsList().then(
                function(result) {
                    expect(result).toEqual(deps.mockChampionsListResult.MRData.StandingsTable.StandingsLists);
                }
            );

            deps.$httpBackend.flush();
        });

        it('It should call getChampionsList - with error 500', function() {
            deps.$httpBackend.whenGET(deps.mockedData.regexp.getAllRegex).respond(500, 'error');

            deps.championsDataservice.getChampionsList().then(
                deps.mockedData.failedPromise,
                function(result) {
                    expect(result).toEqual(deps.mockedData.response.error);
                }
            );

            deps.$httpBackend.flush();
        });
    }
});
