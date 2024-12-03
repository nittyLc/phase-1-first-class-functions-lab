// Code your solution in this file!
// Function to return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function to return the last two drivers
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  // Array of functions for selecting drivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function to create a fare multiplier
  const createFareMultiplier = function (multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  };
  
  // Fare doubling function
  const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
  };
  
  // Fare tripling function
  const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare);
  };
  
  // Function to select different drivers
  const selectDifferentDrivers = function (arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  };
  
  // Exporting the functions for the test suite
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
  };
  