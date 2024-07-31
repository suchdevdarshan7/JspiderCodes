// 'use strict'
// With and without strict mode this will give window object  
// console.log(this);

//Without strict in normal function will give window object
// With strict in normal function it will give undefined

// function Demo(){
//     console.log(this)
// }
// Demo()

// With and without strict mode in arrow function will give window object

// let a = ()=>{
//     console.log(this)
// }
// a()

// Inside the object 
// 'use strict'
// const a = {
//     name: "Something",
//     normal: function(){
//         console.log(this)
//     },
//     arrow: ()=>{
//         console.log(this.name)
//     }
// }

// const {normal,arrow} = a;

// normal()
// arrow()


// class sample{
//     greet (){
//         console.log(this)
//     }
// }

// let obj = new sample;
// obj.greet()

// var name = "I am a good boy from the global scope "

// 'use strict';

