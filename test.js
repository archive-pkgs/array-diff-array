'use strict';
var assert = require('assert');
var arrayDiff = require('./');

it('array with one difference', function () {
	assert.deepEqual(arrayDiff([1, 2, 4], [1, 2, 4, 5]), [5]);
});

it('array with more than one difference', function () {
    assert.deepEqual(arrayDiff([1, 2, 4, 3], [1, 2, 4, 5]), [3, 5]);
});

it('should throw range error', function () {
    assert.throws(function () {
        arrayDiff([1, 2, 4, 3], [1, 2, 4, 5], [1, 2, 3])
    });
});

it('should throw type error', function () {
    assert.throws(function () {
        arrayDiff('string', [1, 2, 4, 5])
    });
});

it('array with strings', function () {
    assert.deepEqual(arrayDiff(['apple', 'banana'], ['apple', 'orange']), ['banana', 'orange']);
});

