'use strict';

var _findMatchingSum = function (dataSet, target) {
    var sum = [];

    for (var i = 0; i < dataSet.length - 1; i++) {
        var found = false;
        var n = dataSet.length;
        var j = i + 1;

        while (j < n) {
            var a = dataSet[i];
            var b = dataSet[j];
            var c = dataSet[n];

            if (a + b + c === target) {
                found = true;
                sum = [a, b, c];
                break;
            } else {
                (a + b + c) < target ? j++ : n--;
            }
        }

        if (found) break;
    }

    return sum;
};

module.exports = {
    findMatchingSum: _findMatchingSum
}
