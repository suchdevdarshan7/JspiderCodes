//! Objects Definition : 
//^ Objects are real world entities which has physical existence: Objects in javascript holds 
//^ key value pairs 
//^ Accessing objects has two ways they are 
//* Object_name.Key_name
//* Object_name["Key_name"]

//! Ways to create object : 

//& Object literals : 

// let obj = {name: "Darshan", youtube:"www.youtube.com"};

//& Object creation constructor function: 

// function obj1(name, age){
//     this.age = age;
//     this.name = name;
// }

// let obj2 = new obj1("Darshan",234);

// console.log(obj2)

//& Object creation using Object constructor: 

// let obj1 = new Object()

// obj1.name = "Darshan";
// obj1.helo = "Good boy";

// console.log(obj1)

//& Object creation using class:

// class hello {
//     constructor(name,age,job){
//         this.age = age;
//         this.name = name;
//         this.job = job;
//     }
// }

// let obj1 = new hello("Darshan",22,"Hacker");

// console.log(obj1);


//! Object methods : 

//~ 1. Object.values();
//* Object values gives all the values in the objects : 
//* Object.values method returns all the values in the form of an array : 

// let obj = {
//     1: "HI",
//     2: "Bye",
// }

// console.log(Object.values(obj));

//~ 2. Object.key();
//* Object.values gives all the keys in the objects 
//* Object.values() gives returns all the keys in the form of an array : 
// let obj  = {
//     name: "Darshan",
//     age: 22,
//     job: "Hacker"
// }

// console.log(Object.keys(obj));

//~ 3. Object.entries()
//* Object.entries() method is used to store the key value pair into array  
//* Object.entries() method a array of array consisting a key value pair:

// let obj = {
//     name: "Darshan",
//     age:22,
//     job:"Hacker"
// }

// console.log(Object.entries(obj))

//~ 4. Object.create()

//* Object.create() method is used to create an object using an existing object
//* Object.create() method returns a new Object with all the key value pairs: 

let obj = {
    name: "hello ",
    age: 22,
    car: "Lambo"
}

const a = Object.create(obj);

a.name = "Darshan";

console.log(obj);
console.log(a);

//~  5. Object.assign()
//* Object.assign() method is used to copy the key values of the objects to another Object
//* Object.assign() method modifies the orginal object and also returns the target object
//* Object.assign() --> syntax ==>  Object.assign(target,source);

// let obj ={
//     a:"A",
//     b:"B",
//     c:"C"
// }
// let obj2 = {
//     a:"C",
//     b:"B",
//     d: "D"
// }

// const obj3 = Object.assign(obj,obj2)
// console.log(obj)
// console.log(obj2)
// console.log(obj3)

//~ 6. Object.seal()
//* Object.seal() is used to seal the object 
//* Object.seal() we can update the existing values but cannot add or remove the values 
//* Object.seal() returns the object being sealed : 

// let obj = {
//     name: "Darshan",
//     age: "11",
//     job: "Programmer"
// }

// const a = Object.seal(obj);

// obj.name = "Dhoni";
// obj.car = "Lambo"; 
// delete obj.name;
// console.log(a)
// console.log(obj)

//~ 7. Object.freeze()
//* This method is used to freeze the array meaning 
//* This method is used to 
//* 

// let obj = {
//     name: "Darshan",
//     age: "11",
//     job: "Programmer"
// }
// // Object.freeze(obj)
// obj.name ="Dhoni"
// delete obj.name;
// obj.car = "Lambo";
// console.log(obj)


// // console.log(Object.isFrozen())
// const a = obj.hasOwnProperty('age');
// console.log(a);





// isfrozen isSealed hasOwnProperty