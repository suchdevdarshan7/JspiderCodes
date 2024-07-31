//! Array : 

//^ --> Array is a collection of homogenous and heterogenous data :
//^ --> It is a non primitive data type : 

//! Ways to create an array : 

//? 1.Array Literals : 

// let arr = [1,2,3,4,4]

//? 2. Array() constructor method 

// let arrayw = new Array("Hi","This","is")
// console.log(arrayw)

//? 3. Array.of() method

// let arrow = Array.of("hi",'i',"am","cute")
// console.log(arrow)

//* Notes for array methods 

//! Array methods : 

//? 1. push() 

//^  --> this method is used to push element in the back of the array 
//^  --> this method returns the size of the array 
//^  --> this method affects the orginal array : 

let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];

colors.push("Navy");

console.log(colors);


//? 2. pop()


//^ --> this method is used to remove the last element from the array 
//^ --> this method returns the removed element of the array 
//^ --> this method affects the original array 

//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];

colors.pop();

console.log(colors)


//? 3. unshift()

//^ --> this method is used to add an element in the array from the first 
//^ --> this method returns the updated size of the array 
//^ --> this method affects the original array 

//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];

colors.unshift("Crimson","Darshan");

console.log(colors)

//? 4. shift()

//^ --> this method is used to remove the element from the starting of the array 
//^ --> this method returns the removed element from the array 
//^ --> this method affects the original array : 

//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];

colors.shift();
console.log(colors);

//? 5. includes()

//^ --> this methods is used to check whether a element is present in the array 
//^ --> this methods returns true or false 

// colors.includes("Red");

//? 6. fill()

//! Parameters fill(Value_to_be_filled, Start_index,End__index)

//^ --> this overwrite the array elements with the a specific value:
//^ --> this returns the updated array : 
//^ --> this method affects the original array: 

//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];
// console.log(colors.fill("good"))

// console.log(colors)


//? 7.indexOf()
//! Used to find the index of the array similar to linear search  indexOf(Value_to_be_Searched,start_index)

//^ --> this method is used to check whether a element is present from the starting and returns the index 
//^ --> this method return index number if the element is present else it returns -1 which indicates element is not present
//^ --> this does not affect the original array : 

//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];
colors.push("Green");

colors.indexOf("Green");

//? 8.lastIndexOf()
//! Used to find the index of the array similar to linear search but from the last lastIndexOf(Value_to_be_searched,start_index,)

//^ --> this method is used to check whether used element from the end to start and returns the index
//^ --> this method returns the index if the element is present else it returns -1 which indicates the element is not present 
//^ --> this method does not affect orginal array 

// colors.lastIndexOf('Green');

//? 9.reverse()

//^ --> this method is used to reverse the array : 
//^ --> this method returns the reversed array 
//^ --> this affects the original array : 

//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];
// console.log(colors.reverse())

//? 10. slice();
//! Used to slice the array into fragements: splice(Start_index, end_index)  end index is excluded:

//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];
//^ --> this method is used to slice the array : 
//^ --> this method returns a new array of sliced elements : 
//^ --> this method does not affect the orginal array 

// colors.slice(1,3)

//? 11. splice();
//! Used to add or delete the elements: splice(Start_Index,Number_of_elements_to_be_deleted,...Elements_to_be_added)

//^ --> this method is used to add or delete element in an array 
//^ --> this returns the element an array of  deleted elements if deleted 
//^ --> this returns a empty array if wh elements is added []
//^ --> this method affects the orginal array;
//&  let colors = ["Red","Green","Yellow","Blue","Pink","Black","Brown"];
// colors
colors.splice(2,0,"Darshan","Rahul");

//? 12. at() 
//! used to access the element at a specific index; 

//^ --> this method is used to acces the element in an array like Array_name[index] || Array_name.at(index)
//^ --> this method returns the element of the array at specific index
//^ --> this method does not affect the orginal array 

// colors.at(2);
// console.log(colors.at(3))

//? 13. concat()
//! used to add two array:  takes multiple arguments :

//^ --> this method is used to merge two arrays 
//^ --> this method returns a new array of two merged array 
//^ --> this method does not affect the original array 

// let colors2 = ["Magenta","Indigo","White"];
// let colors3 = ["Darkpurple","hotpink","beige"];

// colors.concat(colors2,colors3)

//? 14. join()

//! used to join all the elements of array using some arguments: Array_name.join('What_to_join_with') 

//^ --> this method is used to join all the element of the array using some joiner
//^ --> this method is returns a new string of all elements 
//^ --> this method does not affect the orginal array 
// colors.join('#')

//? 15. flat()
//! used to flatten a array i.e  if we have nested array it will be taken as an array : 

//^ --> this method is used to flatten an array 
//^ --> this method returns a new array of flattened array 
//^ --> this method does not affect the orginal array


// let arr = [1,2,3,4,5,[1,2,3,4],3,4,6,7,8];

// console.log(arr)

// arr.flat(1)

//?  16. sort()

//^ --> this method is used to sort an array 
//^ --> this method returns a new array of sorted values;
//^ --> this method does not affect the original array 
// let brr = [1,2,3,4,12340812,239123,9123,91230123,9123,193];
// let crr = brr.sort((a,b)=> {return a-b })
// console.log(crr)

let alphabets = ['Z','B','A','K','P'];
console.log(alphabets.sort())


//~ Higher order Array Methods : It accepts a callback function as a argument: 

//? 17. forEach() 
//! used to iterate over a array : 

//^ --> this method is used to iterate over an array :
//^ --> this method is always returns undefined even if we explicitly return something 
//^ --> this method does not affect the original array  

// colors.forEach((element,index,arr)=>{
    // console.log(element,index,arr);
// })

//? 18. map()
//! used to iterate and perform some calculation

//^ --> this method is used to iterate and perform some operation 
//^ --> this method will return an new array of updated elements 
//^ --> this method does not affect the original array 

// colors.map((element,index,arr)=>{
    // return element+"Darshan"
// })

//? 19. filter()

//! used to check whether a condition is matching or not 

//^ --> this method is used to filter the array and based on the condition passed 
//^ --> this method will return new array which matches the condition 
//^ --> this method does not affect the original array 

// let array = [1,2,3,45,5,6,234,23,23,3,2,213,26,457,58,34,13];
// let element = array.filter((element,index,arr)=>{
    //     return element%2==0;
    // })
    
    // console.log(element)
    
//? 20. some()
//! used to check whether a condition is matching or not 

//^ --> this method is used to check if the condition is matching or not 
//^ --> this method returns new array with true or false value 
//^ --> this method does not affect the orginal array 

    // let array = [1,2,3,45,5,6,234,23,23,3,2,213,26,457,58,34,13];

    // let element1 = arr.some((element,index,arr)=>{
        // return element%2==0;
    // })

    // console.log(element1)


//? 21. every();
//! used to check whether all the condition is passing the condition 

//^ --> this method is used to check if all the elements of the array is matching the condition or not 
//^ --> this method is returns true if all the elements pass the condition else it will return false
//^ --> this method does not affect the original array 

// let numbersArray = [6,2,8,4,10,6];

// let condition = numbersArray.every((element)=>{
    // return element%2==0;
// })

// console.log(condition)

// ? 22. find();
//! used to check if only one element passing the condition :

//^ --> this method is used to check if any one element is matching the condition 
//^ --> this method would return the first element which pass the condition else it will return undefined
//^ --> this method does not affect the original array : 

// let numbersArray = [1,1,3,1,11];

// let condition = numbersArray.find((element)=>{
    // return element%2==0;
// })

// console.log(condition)

//? 23. findIndex()

//! used to check if only one element is passing the condition and returns the index 

//^ --> this method is used to check if any one element is mathcing the condition
//^ --> this method return the index of the element which passed the condition else return -1 
//^ --> this method does not affect the original array : 


// let numbers = [1,2,3,4,5,6]

// let answer = numbers.findIndex((element)=>{
//     return element%2==0;
// })
// console.log(answer)


//? 24. findLastIndex

let numbers = [1,2,3,4,5]

let answer = numbers.findLast((element)=>{
    return element%2==0;
})
console.log(answer)

//? 24. flatMap()

//? 25. reduce();

//? 26. reduceRight();


