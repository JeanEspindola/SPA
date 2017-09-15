'use strict';
ngDescribe({
    name: 'year-races-results-filter-spec.js',
    modules: [
        'mobiquity.core'
    ],
    inject: [
        '$filter',
        'mockedData'
    ],
    mocks: {
        'mobiquity.core': {
            'mockedData': {
                'yearRaceResultsList': [
                    {season: '2005', results: [{test: 'test'}]},
                    {season: '2007', results: [{test: 'test'}]},
                    {season: '2009', results: [{test: 'test'}]},
                    {season: '20011', results: [{test: 'test'}]}
                ]
            }
        }
    },
    tests: function(deps) {

        beforeEach(function() {
            deps.$filter = deps['$filter'];
        });

        it('Should filter and return races results for a given year', function() {
            expect(deps.$filter('yearRacesResult')(deps.mockedData.yearRaceResultsList, '2005')).toEqual([{test: 'test'}]);
        });

        it('Should return null when there is no season in the list', function() {
            expect(deps.$filter('yearRacesResult')(deps.mockedData.yearRaceResultsList, '2008')).toEqual(null);
        });
    }
});