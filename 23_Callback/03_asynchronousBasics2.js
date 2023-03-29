console.log("start")
setTimeout(fun,1000);
setTimeout(function f(){
    console.log("timer 2")
},0)

console.log('end');
for(let i=0;i<10000000000;i++){};

console.log("loop ho gya");
 function fun(){
    console.log("timer done");
 }