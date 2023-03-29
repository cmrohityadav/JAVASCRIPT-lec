function hof(x,fn){
    //hof:high order function
    //fn:callback
    console.log(x*x);
    fn(x*x);

}

hof(10,sqr)

function sqr(n){
    console.log("square of the value",n)
}

