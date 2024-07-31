//! This keyword explanation : 
//~ In class 

// class hello{
//     constructor(firstname){
//         this.firstname = firstname; 
//         // console.log(this)
//     }
//     display(style = "italian"){
//         // console.log(this)
//         // console.log(typeof this)
//         console.log(`${this.firstname} eats only ${style}`)
//     }
// }

// let value = new hello("Darshan");

// const s = value.display.bind({firstname:"Raju"});


//! This keyword in the object scenario with call method : 
// let obj1 = {
//     student: "Darshan",
//     age: 22,
//     gender: "male",
//     func: function(){
//         console.log(`${this.student} laughs a lot and he is ${this.age} and a strong ${this.gender}`)
//     }
//     ,
//     func2: ()=>{
//         console.log(`${this.student}`)
//     }
// }

// let obj2 = {
//     student: 'Hari',
//     age: 18,
//     gender: "male",
// }

// obj1.func2.call(obj2);


//! apply method 

// const ringo = { 
//     firstName: "Ringo",
//     greet: function(greeting,punctuation){
//         console.log(`${this.firstName} says ${greeting} ${punctuation}`)
//     }
// }
// const george = {
//     firstName: "George",
//     lastName: "Harrison"
// }

// const nums = [1,7,8,3,1,12,46,7,32,64,23,6];

// function sum(){
//     console.log(arguments);
// }

// ! Binding arguments :

// function applySalesTaxes(taxRate,price){
//     return price + price * taxRate;
// }

// function multiply(a, b){
//     return a* b; 
// }

// const double = multiply.bind(null,2);

//! Timers 

// class Counter{
//     constructor(startingNum,increment){
//         this.count = startingNum;
//         this.increment = increment;
//     }
//     // start(){
//     //     setInterval((function(){
//     //         console.log(this.count);
//     //         this.startingNum += this.increment;
//     //     }).bind(this),1000)
//     // }

//     start()
// }

// class Counter{
//     constructor(startingNum = 0, incrementAmt =1){
//         this.startingNum = startingNum;
//         this.incrementAmt = incrementAmt;
//     }

//     start(){
//         setInterval()
//     }
// }


class Cat { 
    constructor(firstName){
        this.firstName = firstName; 
    }
    superGreet(){
        console.log(`#1 I am ${this.firstName}`);

        setTimeout(function(){
            console.log(`#2 I am ${this.firstName}`)
        },500);

        setTimeout(()=>{
            console.log(`#3 I am ${this.firstName}`)
        },1000);
    }
}

let kitty = new Cat("Kitty");

kitty.superGreet()

