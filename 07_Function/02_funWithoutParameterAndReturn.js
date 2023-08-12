function msg(){
    return "hello!!! how are you";
}

let a=msg();
// console.log(a, " Rohit");


function loginUserMsg(username){
    if(username===undefined) {
        console.log("please enter the user name")
        return 
    }

    return `hello ${username} just logged In`;
}

console.log(loginUserMsg("rohit"))
console.log(loginUserMsg()) //interview Q.

