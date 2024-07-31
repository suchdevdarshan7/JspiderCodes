//! The first question of using array objects : 


let arr =[
    {
        name: "Darshan",
        age: 21,
        job:"Programmer",
        dept:"Cse",
    },
    {
        name: "Sajan",
        age: 25,
        job:"Software Developer",
        dept:"Civil",
    },
    {
        name: "Durga Prasad",
        age: 23,
        job:"Web developer",
        dept:"Civil",
    },
    {
        name: "Mamta",
        age: 26,
        job:"Software Engineer",
        dept:"MCA",
    },
    {
        name: "Kiran",
        age: 23,
        job:"Software Engineer",
        dept:"CSE",
    },
    {
        name: "Sneha",
        age: 22,
        job:"Software Devloper",
        dept:"ECE",
    },

]

console.log(arr)

let ans = arr.map((element, idx)=>{
    return [   arr.at(idx).name, arr.at(idx).dept  ]
})


console.log(ans)