// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const  returnFirstTwoDrivers =  (drivers) => {
   
    return drivers.slice(0,2);
}
const  returnLastTwoDrivers =  (drivers) => {
   
    return drivers.slice(-2);
}
// console.log(returnLastTwoDrivers(drivers))
// const selectingDrivers = [ returnFirstTwoDrivers() , returnLastTwoDrivers() ]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(myInt) {
   return function fareMultiplier(value = 4) {
     return  myInt * value;
   }
}
const fareDoubler =  createFareMultiplier(2);
const fareTripler =  createFareMultiplier(3);

function selectDifferentDrivers(drivers, f1) {
    return f1(drivers);
  }