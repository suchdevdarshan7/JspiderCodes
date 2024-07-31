'use strict';

// let ob1 = {name:"John"};
// let ob2 = {age:25};
// let ob3 = {company:"Google"};
// let ob4 = {place:"Kanyakumari"};
// let ob5 = {code:"javascript"};
// console.log(Object.assign({},ob1,ob2,ob3,ob4,ob5))


// let arr = {...ob1,...ob2,...ob3,...ob4,...ob5};

// // Object.assign(ob5,[...arr])

// console.log(arr)

function modify(obj){
    obj.hello = "Darshan";
}

let obj = { 
    hello: "Hi",
    age: 19,
    job:"Hacker"
}
Object.seal(obj)
console.log(obj)
modify(obj)
console.log(obj)


const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
