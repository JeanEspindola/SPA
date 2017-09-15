'use strict';
ngDescribe({
    name: 'champions-list-dataservice-factory-spec.js',
    modules: [
        'mobiquity.core'
    ],
    inject: [
        'mobiquity.core.championsDataservice',
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
            deps.championsDataservice = new deps['mobiquity.core.championsDataservice']();
        });

        it('Champions dataservice should be loaded', function() {
            expect(deps.championsDataservice).toBeDefined();
        });
    }
});
