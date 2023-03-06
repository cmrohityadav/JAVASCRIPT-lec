const powerTwo =(n)=>{
    return n**2;
}

function powerCube(powerTwo,n){
    return powerTwo(n)*n;
}

console.log(powerCube(powerTwo,3));

function sayHello(){
    return ()=>{
        console.log("hello rohit")
    }
};
let guessValue=sayHello();
console.log(guessValue);
guessValue();