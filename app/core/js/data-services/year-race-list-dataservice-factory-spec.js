'use strict';
ngDescribe({
    name: 'year-race-list-dataservice-factory-spec.js',
    modules: [
        'mobiquity.core',
        'mock/yearRaceResults.json'
    ],
    inject: [
        'mobiquity.core.yearRacesListDataservice',
        '$httpBackend',
        '$q',
        'mockedData',
        'mockYearRaceResults'
    ],
    mocks: {
        'mobiquity.core': {
            'mockedData': {
                regexp: {
                    'yearsResult': /http:\/\/ergast.com\/api\/f1\/undefined\/results\/1.json/
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
            deps.yearRacesListDataservice = new deps['mobiquity.core.yearRacesListDataservice']();
        });

        it('Year race list dataservice should be loaded', function() {
            expect(deps.yearRacesListDataservice).toBeDefined();
        });

        it('It should call getYearRacesList - with success', function() {
            deps.$httpBackend.whenGET(deps.mockedData.regexp.yearsResult).respond(deps.mockYearRaceResults);
            deps.yearRacesListDataservice.getYearRacesList().then(
                function(result) {
                    expect(result).toEqual(deps.mockYearRaceResults.MRData.RaceTable.Races);
                }
            );

            deps.$httpBackend.flush();
        });

        it('It should call getYearRacesList - with error 500', function() {
            deps.$httpBackend.whenGET(deps.mockedData.regexp.yearsResult).respond(500, 'error');
            deps.yearRacesListDataservice.getYearRacesList().then(
                deps.mockedData.failedPromise,
                function(result) {
                    expect(result).toEqual(deps.mockedData.response.error);
                }
            );

            deps.$httpBackend.flush();
        });
    }
});
