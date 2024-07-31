//! promise instance methods are: 

//~ then()
//~ catch()
//~finally()
//* For the above method we have a callback function passed inside the methods


//! promise static methods :
//~ Promise.all()
//~ Promise.allSettled()
//~ Promise.race()
//~ Promise.any()
//* For all the above methods we must pass the promises in the form of array [promise1,promise2]

let p1 = new Promise((res,rej)=>{
    res("Hi i am resolve 1")
    rej("Hi i am reject 1")
})
let p2 = new Promise((res,rej)=>{
    res("Hi i am resolve 2")
    rej("Hi i am reject 2")
})
let p3 = new Promise((res,rej)=>{
    res("Hi i am resolve 3")
    rej("Hi i am reject 3")
})

//& 1. Promise all()
//^ if all the promises are resolved it works else it prints the reject statement : 
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

//& 2. Promise.allSettled()
//^ It prints all the status of the promises it accepts the arguments in array 
Promise.allSettled([p1,p2,p3]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

//& 3. Promise.race()
//^ It will print the first resolved promise 

Promise.race([p1,p2,p3]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

//& 4. Promsise.any()
//^ If any one of the promises is settled then it will print the promise
//^ if no promise is resolved the it will throw and aggregate error 

Promise.any([p1,p2,p3]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
