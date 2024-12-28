console.log("Hello Rohit")

function sayHello(){
    console.log(`Hello from sayHello Function`)
}

// it call a function after given milisecond
setTimeout(()=>{
    sayHello()
},5000)

for(let i=0;i<10;i++){
    console.log(i)
}