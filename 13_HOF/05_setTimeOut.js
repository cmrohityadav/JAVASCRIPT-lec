
// setTimeout =>> used to display after a time in one time only 
// kuchh samay k baad aayega jo bhi chij pass karge
// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.



function hayHello(){
    console.log("hello Rohit bhai",Math.random());
}
hayHello();

setTimeout(hayHello,5000); //x milli second k baad excute hoga
