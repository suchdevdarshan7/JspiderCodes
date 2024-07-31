//! Shallow copy : 


// let arr = numbers;


// arr[0] = "Darshan";

// console.log(numbers)
// console.log(arr)


//! Deep copy u: 
// let numbers= [1,2,3,4,['Darshan','Syed'],5];
// let newArray = [...numbers];

// newArray[4][0] = 'Kiran';

// console.log(numbers)
// console.log(newArray)

//! Deep copy using json : 
// let numbers= [1,2,3,4,['Darshan','Syed'],5];
// let newArray = JSON.parse(JSON.stringify(numbers));

// newArray[4][0] = 'Kiran';


// console.log(numbers)
// console.log(newArray)


let numbers= [1,2,3,4,5];

let value = 3; 
let ans = 0 ; 
for(let i = 0 ; i<numbers.length;i++){
    if(numbers[i]===value){
        ans = i ;
        break;  
    }
    return -1 ; 
}

console.log(ans)