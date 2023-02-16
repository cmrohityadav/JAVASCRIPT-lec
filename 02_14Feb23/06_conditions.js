let age = 13;
if (age >= 18) {
    console.log("You are allowed");
}
else {
    console.log("You are not allowed");
}


let signal = "yellow"

if (signal == "red") {
    console.log("Stop");
}
else if(signal=="yellow"){
    console.log("go slow");
}
// even this condition is true but not execute
else if (signal == "yellow") {
    console.log("udjfjodo");
}
else {
    console.log("Go");
}


// Ternary Op / Ternay Conditon
//  condtion ? TRUE:False

isloggedin = false;
isloggedin ? console.log("Buying Mer") : console.log("Not Buying");



