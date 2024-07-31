//! Not possible: 

// function swap(str){
//     let start = 0 ; 
//     let end = str.length - 1;
//     let temp = '';
//     while(start<=end){
//         temp = str[start];
//         str[start] = str[end];
//         str[end] = temp; 
//         start++; 
//         end--;
//     }
//     return str; 
// }

let str = "Darshan";
let str1 = "";
// swap(str)

for(let i = 0 ;i<str.length;i++){

    if(str[i]==='a'){
        str1 = str1 + 'Z';
    }
    else{
        str1 =  str1 + str[i];
    }
}

console.log(str1)