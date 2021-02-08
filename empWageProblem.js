console.log("Welcome to Employee Wage Problem");


const FULL_DAY_HOUR = 8;
const PART_DAY_HOUR = 4;
const WAGE_PER_HOUR = 20;
const IS_PART_TIME = 0;
const IS_FULL_TIME=1 ;
const IS_ABSENT = 2;
const NUM_OF_WORK_DAYS = 20;

const MAX_HOURS_IN_MONTH = 100;
let workDays = 1;
let totalWorkHours = 0;

var finalWage=0;
let empCheck;
var totalWorkingDays = 0;
var totalWorkingHours = 0;
var empDailyWageArr = new Array();



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
// Calculating wage for month
function main() {
    while (totalWorkingDays <= NUM_OF_WORK_DAYS && totalWorkingHours <= MAX_HOURS_IN_MONTH) {
        totalWorkingDays++;
        let empHrs = getFinalWage();
        totalWorkingHours += empHrs;
        empDailyWageArr.push(
            {
                dailyWage: calDailyWage(empHrs),
                toString() {
                    return "\n Daily Earned Wage is=> " + this.dailyWage
                }
            });
    }
    console.log("Total wage of month is : " + finalWage);
    console.log(empDailyWageArr.toString());
}
// Calculating daily wage along with total wage
function calDailyWage(empHrs) {
    let dailyWage = empHrs * WAGE_PER_HOUR;
    finalWage += dailyWage;
    return dailyWage;
}
main();


