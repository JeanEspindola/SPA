'use strict';
ngDescribe({
    name: 'year-races-list-filter-spec.js',
    modules: [
        'mobiquity.core',
        'mock/championsListResult.json',
        'mock/championsListFiltered.json'
    ],
    inject: [
        '$filter',
        'mockChampionsListResult',
        'mockChampionsListFiltered'
    ],
    tests: function(deps) {

        beforeEach(function() {
            deps.$filter = deps['$filter'];
        });

        it('Should filter champions list results.', function() {
            expect(deps.$filter('championsListFilter')(deps.mockChampionsListResult.MRData.StandingsTable.StandingsLists)).toEqual(deps.mockChampionsListFiltered);
        });

    }
});