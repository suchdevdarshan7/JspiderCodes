
Promise.resolve().then(()=>{
    setTimeout(()=>{
        console.log("Promise resolved");
    },2000)
})

setTimeout(()=>{
    console.log("setTimeout");
},1000)