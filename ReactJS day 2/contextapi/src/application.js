// 'use strict'

// var name = "I don't know how i am working ?";

const obj = {
    name: "hi",
    class:"mern",
    dept:"cse"
}

const {name,class:sam,dept}=obj;

console.log(name)
console.log(sam)
console.log(dept)

fetch().then((res)=>res.json()).then((data)=>console.log(data))


