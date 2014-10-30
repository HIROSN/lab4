var _ = require("lodash"),
  exercises = {};

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"
exercises.wheresWaldo = function() {
  // TODO: implement me
  var found;

  _.each(arguments, function(val) {
    if (val.indexOf("waldo") >= 0) {
      found = found || val;
    }
  });

  return found;
};

// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()
exercises.largestNums = function(arrayOfNumberArrays) {
  // TODO: implement me
  return _.chain(arrayOfNumberArrays).map(function(numberArray) {
    return _.chain(numberArray).max().value();
  }).value();
};

// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
exercises.filterDates = function(dates, lowerBound, upperBound) {
  // TODO: implement me
  var timeLowerBound = (new Date(lowerBound)).getTime(),
      timeUpperBound = (new Date(upperBound)).getTime();

  return _.filter(dates, function(val) {
    var time = (new Date(val)).getTime();
    return (time >= timeLowerBound && time <= timeUpperBound);
  });
};

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()
exercises.largestNumsReduce = function(arrayOfNumberArrays) {
  return _.map(arrayOfNumberArrays, function(val) {
    return _.reduce(val, function(max, num) {
      return Math.max(max, num);
    });
  });
};

module.exports = exercises;
