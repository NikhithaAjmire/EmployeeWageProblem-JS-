console.log("Welcome to Employee Wage Problem");


const FULL_DAY_HOUR = 8;
const PART_DAY_HOUR = 4;
const WAGE_PER_HOUR = 20;
const IS_PART_TIME = 0;
const IS_FULL_TIME=1 ;


let finalWage;
let empCheck;




// Checking Employee Status

function getFinalWage() {
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_FULL_TIME:
            finalWage = FULL_DAY_HOUR * WAGE_PER_HOUR;
            console.log("Daily wage of an full time employee is: "+finalWage);
            break;
        case IS_PART_TIME:
            finalWage = PART_DAY_HOUR * WAGE_PER_HOUR;
            console.log("Daily wage of a part time employee is: "+finalWage);
            break;
        default:
            console.log("Employee is absent ");
    }
}
getFinalWage();