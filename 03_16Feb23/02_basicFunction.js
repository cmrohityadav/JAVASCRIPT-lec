function helloToWorld() {
    console.log("hello duniya wale kaise ho aap sabhi ?")
    
}

helloToWorld();
helloToWorld();


function sayHello(name){
    console.log("my name is:",name)
}

sayHello(); //it give the undefine
// sayHello(rohit); //it give the error
sayHello("Rahul");


// another way ==> yehi use krna hai 
function namess(names){
    console.log(`hello mera naam ${names} hai`)
}

namess("Rohit");
namess("rahul");


// return type function
console.log("\n\n\nreturn type function");

function namste(){
    return "hello india";
}

let greeting=namste(); //storing the value of function in the variable
console.log(greeting);
console.log(namess()); //directly using fucntion

