// setInterval =>> yeh kuchh time(millisecond) of period k baad repeat krega khud ko;
// The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
function hayHello(){
    console.log("hello Rohit bhai",Math.random());
}
hayHello();

setInterval(hayHello,1000);