
//! Shallow copy in array : 

let arr = [1,2,3,4,5,[1,2,3],6];

// let copy = arr; 
let copy = [...arr]
copy[0] = 200;
copy[5][0] = 1000;
//& it does not affect the non nested elements
//& it affects the nested elements in shallow copy : 
console.log(copy)
console.log(arr)


//! Deep copy in array : 

let array = [1,2,3,4,[1,2,3,4],5];

let copied = JSON.parse(JSON.stringify(array));

console.log(copied);

//& it does not affect the nested elements in the deep copy in array : 

copied[0] = 200; 
copied[4][0] = 5000;
console.log(copied)
console.log(array)


//^ ------------------------------------------------------------------------------------------->

//! Shallow copy in objects : 
let obj1 = {
    name: "Darshan",
    id: 100,
    car: "Lambo",
    add:{
        comp:"Google",
        salary:"50LPA"
    }
}

let obj2 ={...obj1};

obj2.name = "Rahul";

//& it does not affect the non nested key value pairs : 
//& it affects the nested elements of the objects

console.log(obj1)
console.log(obj2)

obj2.add.comp = "Microsoft";

console.log(obj1)
console.log(obj2)



//! Deep copy in objects: 


let team1 = { 
    tname:"CSK",
    tcaptain:"Dhoni",
    thistory:{
        cups: 5
    }
}
let team2 = JSON.parse(JSON.stringify(team1));

team2.tname = "RCB";
team2.tcaptain = "Virat Kohli";
team2.thistory.cups = 0 ; 

//& this does not affect the nested elements : 

console.log(team1)
console.log(team2)


