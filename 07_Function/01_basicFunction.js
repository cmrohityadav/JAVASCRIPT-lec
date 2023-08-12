function greet(){
    console.log("hello rohit welcome");

}
greet //reference

function square(x){ //x=>> parameter
    console.log(x*x);
}
function sum(x,y){
    return x+y;
}
greet();
square(8); //8=>> argument

let a=sum(8,10);
console.log(a);



// function other type ==>variable type function
let add=function(a,b){
    return a+b;
}

console.log(add(5,3));

/*

if you dont return anything in the function then then it will return 
undefined



*/