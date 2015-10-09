'use strict';

var should = require('should');

var MiamUtils = require('../src/utils');

describe('MiamUtils', function () {
    describe('#findMatchingSum', function () {
        it('should find the matching sum.', function (done) {
            var dataSet = [1, 2, 3, 9, 10, 13, 14, 16, 20, 21, 23, 24, 28, 33, 34, 37, 38, 45, 50];
            var target = 95;

            MiamUtils.findMatchingSum(dataSet, target).should.be.eql([13, 37, 45]);
            done();
        });
    });
});
