let arry=[1,2,3,4,5,6,];
console.log(arry)
//push and pop method modfiy the original array
console.log(arry.pop())
console.log(arry)

console.log(arry.indexOf(5)); //its search and 

console.log(arry.at(3)); // 3 index ki value dega


//shift
console.log("\n\nshift")
let arry2=[1,2,3,4,55,6,7,]
console.log(arry2.shift());
console.log(arry2);
//unshift
console.log("\n\nunsift")
console.log(arry2.unshift("rohit"));
console.log(arry2);


console.log("\n\nslice"); //dost not modify original and return new aarray
let arry3=[1,2,3.4,4.5,6,7,8,9];
console.log(arry3.slice(0,2));
console.log(arry3);

console.log("\n\nsplice"); 
let arry4=[1,2,3.4,4.5,6,7,8,9];
let p=arry4.splice(0,3,"rahul","rohit")



console.log(arry4)
console.log(p)

console.log("\n\nReverse"); 
let arry5=[1,2,3,4,5,6,7,8,8];
console.log(arry5.reverse());
console.log(arry5)

console.log("\n\nSort"); 
let arry6=[1,"a",2,30,"A",4,15,6,7,"r",1,0,"rohit","p"]
console.log(arry6.sort());
console.log(arry6)


console.log("\n\nSort"); 
















