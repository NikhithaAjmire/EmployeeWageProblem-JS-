console.log("Welcome to Employee Wage Problem");
//variable decleration

const FULL_DAY_HOUR = 8;
const WAGE_PER_HOUR = 20;
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
   if(empCheck1==1)
   {
        let dailyWage=FULL_DAY_HOUR*WAGE_PER_HOUR;
        console.log("Daily wage of an employee is: "+dailyWage);
   }
}
dailyWage();