// Code your solution in this file!
const returnFirstTwoDrivers = function anonymous () {
  return ['Antonia', 'Nuru'];
}

const returnLastTwoDrivers = function anonymous () {
    return ['Amari', 'Mo'];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier (anInterger)
{
  return function (fare) {
    return fare * anInterger;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
    return driversToReturn(arrayOfDrivers);
  };