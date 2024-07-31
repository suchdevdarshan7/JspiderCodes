let array = [];
let heading = document.querySelector("h1")
async function fetchApi(){
    const link =  await fetch("https://api.github.com/users")
    const data = await link.json()
    
}



// console.log(DataStorage)