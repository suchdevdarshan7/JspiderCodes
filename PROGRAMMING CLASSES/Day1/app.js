//! Basics if else operations  : Programming class 1 : 

//? Eligible to vote: 

let age = 19; 

if(age>18){
    console.log("You are eligble to vote")
}

//? Eligible to vote or note 


if(age>18){
    console.log("You are eligble to vote")
}
else{
    console.log("You are not eligble to vote")
}

//? Ticket price; 

let ageOfCandiatate = 19 ; 

if(ageOfCandiatate=>18){
    console.log("Price is 200")
}
else if(ageOfCandiatate>=10 && ageOfCandiatate<18){
    console.log("Price is 100")
}
else if(ageOfCandiatate>0 && ageOfCandiatate<10){
    console.log("Free ")
}
else{
    console.log("Invalid data")
}


//? Find whether the number is divsible by 5 and 3 

let number = 15; 

if(number%5==0 && number%3==0){
    console.log(`The ${number} is divisible by both 3 and 5`)
}
else if(number%5==0){
    console.log(`The ${number} is divsible by  5`)
}
else if(number%3==0){
    console.log(`The ${number} is divisble by 3 `);
}

else{
    console.log("The number is not divislbe by 3 or 5");
}