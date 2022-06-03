// Create a function that takes two dates and returns the number of days between the first and second date.


// use month day year as three elements in arrays 
// first date array and second date array.
//     function
// for loop with .length 
// return length


// let firstDate = [];
// let secondDate = [];
// function getDays() {
//     for (let i = firstDate[1]; i < ; i++) {

//     }
// }

// OR

let firstDate = [];
let secondDate = [];
let monthOne = prompt("Month of first date?");
let monthTwo = prompt("Month of second date?");
let dayOne = prompt("Day of arrival?");
let dayTwo = prompt("Day of Departure?");
let yearOne = prompt("Year of first date?");
let yearTwo = prompt("Year of second date?");
firstDate.push(monthOne);
firstDate.push(dayOne);
firstDate.push(yearOne);
secondDate.push(monthTwo);
secondDate.push(dayTwo);
secondDate.push(yearTwo);

function getDays() {
    return secondDate[1] - firstDate[1]
};

// console.log(getDays(firstDate, secondDate));


//make afunction that labels date as a number of day in year subtract number of day 

// let sevenMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// let fourMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
// let febReg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
// let febLeap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
