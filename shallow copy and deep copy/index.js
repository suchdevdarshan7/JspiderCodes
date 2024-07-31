// let numbers = [1,2,3,4,5,6,7,8]
let colors = ["Red",'Green','Blue']
// function sum(arr){
//     let result =[] ; 
    
//     for(let i = 0 ;i<arr.length;i++){
//         let ans = 0 ; 
//         for(let j = 0;j<arr.length;j++){
//             result[i]= ans +  arr[i][j];
//         }
//     }
//     console.log(result)
// }
// let arr = [ [10,20], [20,30], [30,40] ]


// sum(arr);
// let sum = 0 ; 
// console.log(result)
// let result = numbers.flatMap((element,index)=>{
//     return [element,colors[index]];
  
// })
// console.log(result)
let numbers = [1,2,3,4,5,6];
let result = numbers.reduceRight((element,index,arr,brr)=>{
    console.log(element,index,arr,brr)
    return 10;
},70)

console.log(result);
