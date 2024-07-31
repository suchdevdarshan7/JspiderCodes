function isPrime(num){
    if(num===0 || num===1){
        return false; 
    }
    for(let i = 2 ; i<Math.sqrt(num);i++){
        if(num%i==0){
            return false; 
        }
    }
    return true;
}

let num = Number(prompt("Enter a number"));

let result = (isPrime(num))? "Prime" : "Composite";

console.log(result);