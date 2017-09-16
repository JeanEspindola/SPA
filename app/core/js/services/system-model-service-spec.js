'use strict';
ngDescribe({
    name: 'system-model-service-spec.js',
    modules: [
        'mobiquity.core'
    ],
    inject: [
        'mobiquity.core.systemModelService'
    ],
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

    }
});