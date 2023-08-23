function createPromise() {
    
    return new Promise(function exec(resolve,reject){
        //code here
        setTimeout(function f() {
            console.log("timer done")
            
        }, 3000);
    });
    
}

console.log("start")
let x=createPromise();
console.log("got a new promise")
x.then(function f(){
    console.log("promise done")
})
