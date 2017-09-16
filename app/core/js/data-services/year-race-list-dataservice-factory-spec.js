'use strict';
ngDescribe({
    name: 'year-race-list-dataservice-factory-spec.js',
    modules: [
        'mobiquity.core'
    ],
    inject: [
        'mobiquity.core.yearRacesListDataservice',
        '$httpBackend',
        '$q',
        'mockedData'
    ],
    mocks: {
        'mobiquity.core': {
            'mockedData': {
                regexp: {},
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

        it('Champions dataservice should be loaded', function() {
            expect(deps.yearRacesListDataservice).toBeDefined();
        });
    }
});
