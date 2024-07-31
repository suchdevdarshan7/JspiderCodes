//! pending promises
// let p = new Promise((resolve,reject)=>{

// })

// console.log(p);
//! Fullfiled promises
// let p1  = new Promise((res,rej)=>{
//     res("Hi ");
// })

// console.log(p1)
//! Rejected promises
// let p2 = new Promise((res,rej)=>{
//     rej("rejected")
// })
// console.log(p2)


//! Methods to handle the promises :

//~ then method is used to handle the resolve block of the promise: 
//~ catch method is used to handlet the reject blokc of the promise:
//~ finally method is used to mention any message --> works both in reject and resolve :
let value = false;
let p1 = new Promise((res,rej)=>{
    if(value){
        res("Mission completed")
    }
    else{
        rej("Mission failed")
    }
})

p1.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("This is finally")
})