const returnFirstTwoDrivers = function(drivers){
    //const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return drivers.slice(0,2);
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(cost){
    return function(integer) {
        return cost * integer;
    }
};
const fareDoubler = function(createFareMultiplier){
    //return function() {
        return createFareMultiplier * 2;
    //}
}
//const fareTripler = function(createFareMultiplier){
    //return function() {
  //      return createFareMultiplier * 3;
//} This one also works for below v
const fareTripler = createFareMultiplier => createFareMultiplier * 3

const selectDifferentDrivers = function(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}