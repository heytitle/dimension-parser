var dimensionParser = require('../index');

describe('General', function() {
	it('can match simple dimensions', function() {
		expect(dimensionParser('171.5 x 141.5 cm (67.5 x 55.75 in.)', 'in')).toEqual({ width: '67.50', height: '55.75' });
		expect(dimensionParser('171.5x141.5cm', 'in')).toEqual({ width : '67.52', height : '55.71' });
		expect(dimensionParser('88.9 x 203.2 cm (35 x 80 in.) overall 177.8 x 203.2 cm (70 x 80 in.)', 'in')).toEqual({ width : '70.00', height : '80.00' });

		expect(dimensionParser('88.9 x 203.2 x 203.2 cm (35 x 80 in.) overall 177.8 x 203.2 x 203.2 cm (70 x 80 x 80 in.)', 'in')).toEqual({ width : '70.00', height : '80.00', length : '80.00' });
	});

	it('can match basic fractions', function () {
		expect(dimensionParser('171.5 x 141.5 cm (67 1/2 x 55 3/4 in.)', 'in')).toEqual({ width: '67.50', height: '55.75' });
		expect(dimensionParser('(67 1/2 x 55 3/4 in.)', 'cm')).toEqual({ width : '171.45', height : '141.60' });
		expect(dimensionParser('155 x 109.2 cm (61 x 42 7/8 in.)', 'in')).toEqual({ width : '61.00', height : '42.88' });
		expect(dimensionParser('107 x 150 cm (42 1/8 x 59 in.)', 'in')).toEqual({ width : '42.13', height : '59.00' });
		expect(dimensionParser('200.2 x 255.3 cm (78 7/8 x 100 1/2 in.)', 'in')).toEqual({ width : '78.88', height : '100.50' });

		expect(dimensionParser('200.2 x 255.3 x 255.3 cm (78 7/8 x 100 1/2 x 100 1/2 in.)', 'in')).toEqual({ width : '78.88', height : '100.50', length : '100.50' });
	});

	it('can match entity fractions', function () {
		expect(dimensionParser('18¾ x 15 1/8 in. (47.6 x 38¾ cm.) ', 'in')).toEqual({ width : '18.74', height : '15.26' });
		expect(dimensionParser('18 ¾ x 15 1/8 in. (47.6 x 38 ¾ cm.)', 'in')).toEqual({ width : '18.74', height : '15.26' });

		expect(dimensionParser('12 x 39 1/4 x 39 1/4 in. (30.5 x 99.7 x 99.7 cm).', 'in')).toEqual({ width : '12.01', height : '39.25', length : '39.25' });
	});
});