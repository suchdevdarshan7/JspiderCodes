

let students =[

    {
        name:"Darshan",
        age:18,
        dept:"cse"
    },

    {
        name:"Sajan",
        age:28,
        dept:"civil"
    },

    {
        name:"Yogesh",
        age:26,
        dept:"ece"
    },

    {
        name:"Durga Prasad",
        age:22,
        dept:"mech"
    },

    {
        name:"Output",
        age:12,
        dept:"ai&ml"
    }
]


let res = students.map((element,idx)=>{
    return students.at(delete idx.age)
})

console.log(res)



let colors=["Red","Green","Blue","Black","White"]
console.log(colors)

// console.log(colors.join("---->"))
// console.log(colors.join("#"))
// console.log(colors.join())
// console.log(colors.join(""))

