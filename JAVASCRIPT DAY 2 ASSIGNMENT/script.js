// Question 1 : Odd or even 

let a = 2;

if (a % 2 == 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

//Question 2 :  largest between 2 : 
let x = 10;
let y = 20;

if (x > y) {
  // console.log(`${x} is greater `) // can also be written
  console.log("x is greater");
} else {
  // console.log(`${y} is greater`) // can also be written
  console.log("y is greater");
}

// Question 3: check whether the number is divisble by 5 or not

let num = 10;

if(num%5==0){
    console.log("The number is divisible by 5")
}
else{
    console.log("The number is not divisble by 5")
}

// check if a given character is vowel or consonant 

let value = 'a';

if(value==='a'||value==='A'|| value==='e'||value==='E'||value==='i'||value==='I'||value==='o'||value==='O'||value==='u'||value==='U'){
    console.log("The character is a vowel ")
}
else{
    console.log("The character is consonant")
}

// Leap year or not :

let year = 1990;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log("Leap year");
} 
else {
  console.log("Not a leap year");
}
