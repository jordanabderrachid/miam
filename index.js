#! /usr/bin/env node
'use strict';

var assert = require('assert');

process.stdin.setEncoding('utf8');

process.stdin.on('error', function (error) {
  console.error(error);
  process.exit(1);
});

var input = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();

  if (chunk !== null) {
    input += chunk;
  }
});

process.stdin.on('end', function () {
  var inputLines = input.trim().split('\n');
  var kcalDesiredAmout = parseInt(inputLines[0], 10);

  var restaurants = [];

  assert.ok((typeof kcalDesiredAmout === 'number' && kcalDesiredAmout > 0),
    'First line should be a positive integer.');

  inputLines.slice(1).forEach(function (line) {
    assert.ok(line.indexOf('=') !== -1,
      'Other lines should contain "=" character.');

    var lineArray = line.trim().split('=');

    assert.ok(lineArray.length === 2,
      'Invalid line. Should contain only 1 "=" character.');

    var name = lineArray[0].trim();
    var kcal = parseInt(lineArray[1].trim(), 10);

    restaurants.push({
      name: name,
      kcal: kcal
    });
  });

  console.log('Desired kcal: ' + kcalDesiredAmout);
  console.log(restaurants);
});
