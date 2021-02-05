console.log("Welcome to Employee Wage Problem");


const FULL_DAY_HOUR = 8;
const PART_DAY_HOUR = 4;
const WAGE_PER_HOUR = 20;
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
let finalWage;
let empCheck;
let empCheck1;



// Checking Employee Status

empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == 1) {
    console.log("Employee Present");
}
else if (empCheck == 0) {
    console.log("Employee Absent");
}
// function for calculating the daily emp wage

function dailyWage()
{
   empCheck1 = Math.floor(Math.random() * 10) % 2;
   if(empCheck1== IS_FULL_TIME)
   {
        finalWage=FULL_DAY_HOUR*WAGE_PER_HOUR;
        console.log("Daily wage of an full time employee is: "+finalWage);
   }
   else if(empCheck1== IS_PART_TIME)
   {
        finalWage=PART_DAY_HOUR*WAGE_PER_HOUR;
        console.log("Daily wage of a part time employee is: "+finalWage);
   }
}
dailyWage();