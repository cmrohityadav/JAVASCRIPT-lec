// one parameter
console.log("one parameter");

function displaymsg(msg){
    console.log(msg);
}
displaymsg("hey you!");
displaymsg("rohit");


// function with default parameter 
console.log("function with default parameter")

function msgs(msg="hello Rahul"){
    console.log(msg);

}
msgs();
msgs("rohit");

// other examples 
console.log("other examples");

 function sum(x=0,y=100){
    return x+y;
 }

 console.log(sum(10,10));
console.log(sum(10));
