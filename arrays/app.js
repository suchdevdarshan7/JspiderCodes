
// function pushFunction (numbers,value){
//     let arrayNew = [];

//     for(let i = 0 ;i<numbers.length;i++){
//         arrayNew[i] = numbers[i];
//     }

//     arrayNew[numbers.length] = value;
//     return arrayNew;
// }



// function popFunction() {
    
//     let newArray = [];
    
//     for (let i = 0; i < numbers.length - 1; i++) {
//         newArray[i] = numbers[i];
//     }
//     let popedValue = numbers[numbers.length-1];
//     return popedValue;
// }
// let numbers = [12, 23, 35, 46, 53, 62];
// let res = popFunction(numbers);
// console.log(res)




// console.log(newArray)


// let value = 14087; 
// let size = numbers.length;


// numbers[size] = value; 
// console.log(numbers)




// let result  = pushFunction(numbers,value);
// console.log(result);

// push


// for(start,checkpoint,inc/dec)

// for(let start = 1;start<=10;start++){
    //     console.log("Hello world")
    // }
    
    // for(let start = 10 ;start>=1;start--){
        //     console.log(start)
        // }
        
        // console.log(numbers[5])
        // for(let i = 0;i<numbers.length;i++){
            //     console.log(i,numbers[i]);
            // }
            
            
            
// unshift
  

function unshiftFunction(numbers,value){

    let newArray = [];
    newArray[0] = value; 
    for(let i = 0;i<numbers.length;i++){
        newArray[i+1] = numbers[i];
    }
    return newArray;

}


let numbers = [12, 23, 35, 46, 53, 62];
let value = 193 ; 

const result = unshiftFunction(numbers,value);
console.log(result)
