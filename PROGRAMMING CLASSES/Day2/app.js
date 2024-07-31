//! Programming class 2: 

//? Problem 1: WAPT check the ticket price based on the age : 

// let age = parseInt(prompt("Enter your age: "))

// if(age>18){
//     console.log("Price is 200");
// }
// else if(age>=10 && age<=18){
//     console.log("Price is 100");
// }
// else if(age>0 && age<10){
//     console.log("Price is Free");
// }
// else{
//     console.log("Invalid Data");
// }


//? Problem 2: WAPT check whether number is positive negative or 0 


// let number = parseInt(prompt("Enter the number "))

// if(number===0){
//     console.log("The number is 0")
// }
// else if(number<0){
//     console.log("The number is negative")
// }
// else if(number>0){
//     console.log("The number is positive")
// }
// else{
//     console.log("Invalid Data")
// }


//? Problem 3: WAPT check whether the given number is divisble by 5 or 3 

// let checkNumber = parseInt(prompt("Enter the number to check "))

// if(number%3===0 && number%5===0){
//     console.log("The given number is divisble by 3 and 5")
// }
// else if(number%3===0){
//     console.log("The given number is divisble by 3")
// }

// else if(number%5===0){
//     console.log("The given number is divisble by 5")
// }
// else{
//     console.log("The number is not divisble by both 5 and 3")
// }



//? Problem 4: WAPT display the day based on the date : 

const date = new Date().getDay();

const day = new Date();
console.log(day)


console.log(date)

switch(date){
    case 0 : 
        console.log("Sunday")
        break; 
    case 1 : 
        console.log("Monday")
        break; 
    case 2 : 
        console.log("Tuesday")
        break; 
    case 3 : 
        console.log("Wednesday")
        break; 
    case 4 : 
        console.log("Thursday")
        break; 
    case 5 : 
        console.log("Friday")
        break;
    case 6 : 
        console.log("Saturday")
        break;
    default: 
        console.logI("The data is invalid");

}

//? Problem 5 : WAPT to display the month based on the date object()

const month = new Date().getMonth()
console.log(month);


switch(date){
    case 0 : 
        console.log("January")
        break; 
    case 1 : 
        console.log("February")
        break; 
    case 2 : 
        console.log("March")
        break; 
    case 3 : 
        console.log("April")
        break; 
    case 4 : 
        console.log("May")
        break; 
    case 5 : 
        console.log("June")
        break;
    case 6 : 
        console.log("July")
        break;
    case 7 : 
        console.log("August")
        break;
    case 8 : 
        console.log("September")
        break;
    case 9 : 
        console.log("October")
        break;
    case 10 : 
        console.log("November")
        break;
    case 11 : 
        console.log("December")
        break; 
        
    default: 
        console.log(`The data you have entered is invalid `)
}

//? Problem 7:  Display the working hours of the days in the week 

let days = "Monday"; 

switch(days){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log('The working hours in 14 hours ')
        break;
    case "Saturday":
        console.log("The Working hourse is 10 hours")
        break;
    default: 
    console.log("The day is invalid:" )
    break;
}

//? Problem 8: Display the whether the number is positive negative or zero:

let checkNumber = -10;

switch(true){
    case checkNumber===0 : 
        console.log(`The number is 0 `);
        break;
    case checkNumber>0:
        console.log(`Positive`) 
        break;
    case checkNumber<0: 
        console.log('Negative')
        break; 
    default: 
        console.log("Invalid data")
}


