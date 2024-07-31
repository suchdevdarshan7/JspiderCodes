// const hours = {
//     thu:{
//         open: 12, 
//         close: 22,
//     },

//     fri:{
//         open: 11,
//         close: 23,
//     },

//     sat:{
//         open:0,
//         close: 12,
//     }
// }

// let variable = 10; 

// const restuarant = {
//     name: "Kentucky fried Chicken",
//     location: "California ",
//     catogories: ["Italian","Indian","Vegetarian"],
//     mainMenu: ['Bucket Chicken','Burgers','Pizza'],
    
//     //! this is enhanced object literals:
//     hours,
//     variable,

//     order(){
//         console.log("Your order is succesfully placed")
//     }


// }
// restuarant.order();
// console.log(restuarant)


// const arr = [{name: "Darshan", email:"suchdev7@gmail.com"}]

// console.log(typeof console)



//! Truthy and falsy values : 

//~ 5 falsy values : 
//&  0
//&  undefined
//&  null
//&  Nan
//&  '' --> empty string :

//^ Type coersion || Implicit type conversion: 
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean('Darshan'))
// console.log(Boolean({}))



// const money = 0 ; 
// if(money){
//     console.log("Don't spend it all ");
// }
// else{
//     console.log("You should get a job")
// }

// let height = 0 ; 
// console.log(height)
// if(height?? 0){
//     console.log(`YAY your height is defined`)
// }
// else{
//     console.log(`The height is UNDEFINED`)
// }


//? Sets in javascript : 


// const ordersSet = new Set(['Pizza','Pasta','Pizza','Biriyani','Pizza']);

// console.log(ordersSet);

// console.log(new Set('jonas'))

// console.log(ordersSet.has('Pizza'))

// ordersSet.add('Garlic');
// ordersSet.add('Garlic');

// ordersSet.delete('Garlic');

// console.log(ordersSet)


// for (const order of ordersSet){
//     console.log(order)
// }

//~ Example :



// const staffUnique = new Set(staff);

// console.log(staffUnique)

// const method = new Set(['Developer','Tester','TechLead','Data Scientist','Cyber Security Engineer','Analyst','Tester','Developer']);

// console.log(method);


//? Map :

// const rest = new Map();

// rest
//     .set('catgories',['Indian','Chinese','Italian'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'We are open :) ')
//     .set(false, 'We are close :( ')

// console.log(rest.get('open'))
// console.log(rest.get(true))
// console.log(rest.get(false))
// console.log(rest.get('catgories'))
// const time = 22
// console.log(rest.get(time>rest.get('open') && time<rest.get('close')))

// console.log(rest.size)

// const question = new Map(
//     [['Question' , 'What is the best programming language in the world?'],
// [1,"C"],
// [2,"Java"],[3,"Javscript"],['correct',3],[true, 'Correct'],[false, 'Try again']]);

// console.log(question);
// console.log(question.get('Question'))
// for (const [key,value] of question) {
//     if(typeof key === 'number'){
//         console.log(`Answer ${key} : ${value}`)
//     }
// }

// const answer  = 3; 

// console.log(answer)

// question.get(question.get('correct') === answer)


// console.log([...question])




//! Known data structures : 
//~ 1. Array 
//~ 2. Objects 
//~ 3. Sets 
//~ 4. Maps




//^

// const gameEvents = new Map([
//     [17, 'Goal'],
//     [36, 'Substitution'],
//     [47, 'Goal'],
//     [61, 'Substitution'],
//     [64, 'Yellow card'],
//     [69, 'Red Card'],
//     [70, 'Substitution'],
//     [72, 'Substitution'],
//     [76, 'Goal'],
//     [80, 'Goal'],
//     [92, 'Yellow card'],
// ])

// console.log(gameEvents.values())

// const events = new Set (gameEvents.values());

// console.log(events);

// gameEvents.delete(64);

// console.log(`The event happend every ${90/gameEvents.size}`)

// const time = [...gameEvents.keys()].pop();

// for(const [key,value] of gameEvents){
//     const half = key<=45 ?"FIRST": "SECOND";
//     console.log(`[${half}][Half] ${key} : ${value}`)
// }



//! Strings : 

const airline = 'Air India';
const plane = 'A320';

console.log(plane[0])


console.log(plane.indexOf(''))
console.log(plane.lastIndexOf('4'))


console.log(airline.lastIndexOf(''))