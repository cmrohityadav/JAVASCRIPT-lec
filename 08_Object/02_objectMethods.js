let emp={
    id:"101",
    name:"Rohit",
    age:21

};
let chabhi=Object.keys(emp); // to get the key and it return the array
console.log(chabhi);

let value=Object.values(emp); //to get the value and it return the array
console.log(value);

let entries=Object.entries(emp);
console.log(entries);



console.log(emp);
//Object.freeze(emp); //to stop from new entries like to add new key in object
// sab kuch band ho jata hai 

emp.id=100; //it will not update
console.log(emp);

Object.seal(emp); //it will allow only update

emp.name="piyush"
console.log(emp);


// copy object 
console.log("copy object ")
let copyOfemp=Object.assign({},emp);
console.log(copyOfemp);

