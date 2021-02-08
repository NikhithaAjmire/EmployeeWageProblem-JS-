console.log("Welcome to Employee Wage Problem");


const FULL_DAY_HOUR = 8;
const PART_DAY_HOUR = 4;
const WAGE_PER_HOUR = 20;
const IS_PART_TIME = 0;
const IS_FULL_TIME=1 ;
const IS_ABSENT = 2;
const NUM_OF_WORK_DAYS = 20;
let workDays = 1;
let totalWorkHours = 0;

let finalWage;
let empCheck;




// Checking Employee Status

function getFinalWage() {
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_DAY_HOUR;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOUR;
            break;
        case IS_ABSENT:
            return IS_ABSENT;
            break;
    }
}
while (workDays <= 20) {
    workDays++;
    let empHrs = getFinalWage();
    totalWorkHours += empHrs;
}
finalWage = totalWorkHours * WAGE_PER_HOUR;
console.log("Total wage of month is : "+finalWage);





