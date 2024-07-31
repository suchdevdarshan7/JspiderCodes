let button = document.querySelector(".box");

button.addEventListener("click", () => {
  button.innerHTML = "<h1>Button clicked</h1>";
});
//? Create
let a = {
  name: "Darshan",
  job: "Programmer",
  salary: 100000000000000000000000000000000000000,
  age: 23,
};
console.log(a);
//? Read

console.log(a.name);
console.log(a.job);
console.log(a["name"]);
console.log(a);

//? Update

a.address = "Kanyakumari";
a.marks = 450;
console.log(a);

//? Delete

delete a.address;

console.log(a);



