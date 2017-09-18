'use strict';
ngDescribe({
    name: 'year-details-panel-factory-spec.js',
    module: [
        'mobiquity.component.yearDetails',
        'angular-slideout-panel'
    ],
    inject: [
        'angularSlideOutPanel',
        'mobiquity.component.yearDetails.panelFactory'
    ],
    tests: function(deps) {

        beforeEach(function() {

            deps.scope = deps.$rootScope.$new();
            deps.panelFactory = deps['mobiquity.component.yearDetails.panelFactory'];
            spyOn(deps['angularSlideOutPanel'], 'open');
        });

        it('The year details panel factory should be loaded', function() {
            expect(deps.panelFactory).toBeDefined();
        });

        it('Should show the slide-in panel', function() {
            deps.panelFactory.show('2005', 'id', 'test', 'test');
            expect(deps['angularSlideOutPanel'].open).toHaveBeenCalled();
        });

        it('Should create the modal controller function for the panel', function() {
            deps.panelFactory.modalController(deps.scope, 'info');
            expect(deps.scope.info).toEqual('info');
        });

    }
});