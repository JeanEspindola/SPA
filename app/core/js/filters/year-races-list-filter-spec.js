'use strict';
ngDescribe({
    name: 'year-races-list-filter-spec.js',
    modules: [
        'mobiquity.core',
        'mock/yearRaceResults.json'
    ],
    inject: [
        '$filter',
        'mockYearRaceResults',
        'mockedData'
    ],
    mocks: {
        'mobiquity.core': {
            'mockedData': {
                'expectedResult': [
                    {round: '1', raceName: 'Australian Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '2', raceName: 'Malaysian Grand Prix', driverId: 'vettel', firstName: 'Sebastian', lastName: 'Vettel'},
                    {round: '3', raceName: 'Chinese Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '4', raceName: 'Bahrain Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '5', raceName: 'Spanish Grand Prix', driverId: 'rosberg', firstName: 'Nico', lastName: 'Rosberg'},
                    {round: '6', raceName: 'Monaco Grand Prix', driverId: 'vettel', firstName: 'Sebastian', lastName: 'Vettel'},
                    {round: '7', raceName: 'Canadian Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '8', raceName: 'Austrian Grand Prix', driverId: 'rosberg', firstName: 'Nico', lastName: 'Rosberg'},
                    {round: '9', raceName: 'British Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '10', raceName: 'Hungarian Grand Prix', driverId: 'vettel', firstName: 'Sebastian', lastName: 'Vettel'},
                    {round: '11', raceName: 'Belgian Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '12', raceName: 'Italian Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '13', raceName: 'Singapore Grand Prix', driverId: 'vettel', firstName: 'Sebastian', lastName: 'Vettel'},
                    {round: '14', raceName: 'Japanese Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '15', raceName: 'Russian Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '16', raceName: 'United States Grand Prix', driverId: 'hamilton', firstName: 'Lewis', lastName: 'Hamilton'},
                    {round: '17', raceName: 'Mexican Grand Prix', driverId: 'rosberg', firstName: 'Nico', lastName: 'Rosberg'},
                    {round: '18', raceName: 'Brazilian Grand Prix', driverId: 'rosberg', firstName: 'Nico', lastName: 'Rosberg'},
                    {round: '19', raceName: 'Abu Dhabi Grand Prix', driverId: 'rosberg', firstName: 'Nico', lastName: 'Rosberg'}
                ]
            }
        }
    },
    tests: function(deps) {

        beforeEach(function() {
            deps.$filter = deps['$filter'];
        });

        it('Should filter year race results.', function() {
            expect(deps.$filter('yearRacesListFilter')(deps.mockYearRaceResults.RaceTable.Races)).toEqual(deps.mockedData.expectedResult);
        });

    }
});