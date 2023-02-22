// one parameter and single return statement
console.log("one parameter and single return statement");
 const sqr=(x) => x*x;

console.log(sqr(5));

// multiple parameter and single return 
console.log("multiple parameter and single return ");
const sum=(x,y) => x+y;
console.log(sum(5,5));

// returning an object 
console.log("returning an object ");
const sumDiff=(x,y) =>({sum:x+y,diff:x-y});
console.log(sumDiff(10,10));

