//~ SetTimeOut --> Asynchronous 
// console.log("Start")
// setTimeout(()=>{
//     console.log("Set Time Out 1 ")
// },3000)
// setTimeout(()=>{
//     console.log("Set Time Out 2 ")
// },1000)
// setTimeout(()=>{
//     console.log("Set Time Out 3 ")
// },2000)
// setTimeout(()=>{
//     console.log("Set Time Out 4 ")
// },5000)
// setTimeout(()=>{
//     console.log("Set Time Out 5 ")
// },4000)
// console.log("End")

//! The stack will overflow recursion without  base condition:
//~ The way to show time but should not be used: 
// function showTime(){
//     let date = new Date();
//     let time = date.toLocaleTimeString();

//     console.log(time)
//     setTimeout(showTime,5000);
// }
// showTime()

//~ 

// function hello(){
//     // document.write("Connecting")
//     // console.log("Hello world")
// }

// setInterval(hello,4000)

let heading = document.querySelector('h1');

function ChangeTime(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    heading.innerHTML += time; 
}
function ChangeTime2(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    heading.textContent = time; 
}

setInterval(ChangeTime2,1000)
