//!Note: 

//& //^ indicates the function and checking is completed ; 
//& //! indicates the start of the function: 
//& //? indicates the sample values to check if the function is working :
//& //~ indicates the sample function for just checking if the function works:

//! --------------->

//^==================================================================================================>

//! Push function :
let pushFunction = function(OrginalArray,value){
    OrginalArray[OrginalArray.length] = value; 
    return OrginalArray;
}
//? Checking the function 

let numbersArray = [1,2,3,4,5]
let result = pushFunction(numbersArray,10);
console.log(result)

//^==================================================================================================>
//! Pop function :

let popFunction = function (numberArray){
    let tempArray = [];
    
    for(let i = 0 ; i<numberArray.length -1 ;i++){
        tempArray[i] = numberArray[i];
    }
    return tempArray;
}
//? Checking the popFunction - function: 
let employees = ["Rahul","Raj","Sachin","Vikram"];
let popedArray = popFunction(employees);
console.log(popedArray)

//^==================================================================================================>

//! shiftFunction :
let shiftFunction = function(employeeIds){
    
    let tempArray = [];
    
    for(let i =1 ;i<employeeIds.length;i++){
        tempArray[i-1] = employeeIds[i];
    }
    return tempArray;
}
//? Checking the shiftFunction - function:

let employeeIds = [101,102,103,104,105];
shiftFunction(employeeIds)
console.log(shiftFunction(employeeIds))

let resturants = ["Kfc","Dominos","LaPinoz","McD"];
console.log(shiftFunction(resturants));

//^==================================================================================================>

//! unshiftFunction :
let unshiftFunction = function(colors,value){
    let resultArray = [];
    
    resultArray[0] = value; 
    
    for(let i = 0;i<colors.length;i++){
        resultArray[i+1] = colors[i];
    }
    return resultArray;
}

//? Checking the unshift function - function: 
// let arr = [1,2,3,4,5];
let colors = ["Red","Green","Blue","Yellow","White"];
let removeColor = unshiftFunction(colors,"Pink")
console.log(removeColor``)
//^==================================================================================================>


//! includesFunction 
let includesFunction = function(students,student){
    for(let i = 0 ; i<students.length;i++){
        if(students[i]===student){
            return true; 
            break;
        }
    }
    return false;
}

//? Checking the includesFunction - function :
let students = ["Darshan","Purushotham","Sajan","Yogesh"];
includesFunction(students,"Sajan")

//^==================================================================================================>

//! indexOfFunction
let indexOfFunction = function (cars,searchCar){
    for(let i = 0 ; i<cars.length ;i++){
        if(cars[i]===searchCar){
            return i;
            break;
        }
    }
    return -1;
}
//? Checking the indexOfFunction - function : 

let cars = ["Lambo","Bugatti","Jaguar","Bmw","Tesla"];
indexOfFunction(cars,"Lambo");

//^==================================================================================================>

//! reverseFunction : 
let reverseFunction = function(companies){
    let start = 0 ; 
    let end = companies.length - 1; 
    
    while(start<=end){
        let temp = companies[start]
        companies[start] = companies[end]
        companies[end] = temp; 
        start++; 
        end--; 
    }
    return companies;
}

//? Checking the reverseFunction - function: 

let companies = ["Google","Microsoft","Infosys","Walmart"];
reverseFunction(companies)

//^==================================================================================================>


//~ Sample function for testing mapFunction : 
function operation(num){
    return num = num**2 ; 
} 

//! Map function

let mapFunction = function (marks,operation){
    let operatedArray = JSON.parse(JSON.stringify(marks));
    for(let i = 0;i<marks.length;i++){
        operatedArray[i] = operation(operatedArray[i]);
    }
    return operatedArray;
    
}
//? Checking the mapFunction - function: 
let marks = [80,30,60,80,100];
mapFunction(marks,operation);

//^==================================================================================================>

//~ Sample function for testing filterFunction : 

function condition(num){
    return num%2==0
}

//! filterFunction :

let filterFunction = function (numbers,condition){
    let newArray = [];
    let j = 0 ; 
    for(let i = 0;i<numbers.length;i++){
        if(condition(numbers[i])){
            newArray[j] = numbers[i];
            j++;
        }
    }
    return newArray;
}
let numbers = [1,2,3,4,5];
filterFunction(numbers,condition);


//^==================================================================================================>