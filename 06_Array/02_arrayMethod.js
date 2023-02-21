// =>>for the last element
let arr=[1,2,3,4,5];
console.log(arr);
arr.push(6); //add element to last 
console.log(arr);

arr.pop(7,6); //removing element from the last
console.log(arr);



// for zero index
console.log("// for zero index")
arr.unshift(100,200,300); // add element to 0 index
console.log(arr);

arr.shift(100,200)
console.log(arr);

// storing value
console.log("storing value")
let arr2=[1,2,3,4];
console.log(arr2)
let a=arr2.pop();
console.log(a);
console.log(arr2);



// concate
console.log("concate");
let x=[1,2,3];
let y=[4,5,6];
let z=x.concat(y);
console.log(x,y,z);

// join
console.log("join")
let b=z.join("@");
console.log(b);

// reverse
console.log("reverse");
let c=[1,2,3,4];
let c1=c.reverse();
console.log(c1);
console.log(c);

// index of
console.log("index of")
let d=[1,2,3];
console.log(d);
let d1=d.indexOf(3);
console.log(d1);

// slice
console.log("slice")
let e=[1,2,3,4,5,6];
let e1=e.slice(2,4);
console.log(e1);


// adding element in anywhere in the array
console.log("// adding element in the array")
let f=[1,2,3,4,5];
console.log(f);
let f1=f.splice(1,0,100,200);
console.log(f1); //nothing return this function
console.log(f);
f.splice(3,1,-1,-2);
console.log(f);







