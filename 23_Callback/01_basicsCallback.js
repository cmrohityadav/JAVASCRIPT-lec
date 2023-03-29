function hof(x,fn){
    //hof:high order function
    //fn:callback
    console.log(x*x);
    fn();

}

hof(10,function(){
    console.log("done with callback")
})

