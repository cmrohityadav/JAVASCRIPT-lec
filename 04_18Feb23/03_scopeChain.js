let name = "rohit"

console.log("line number is 3 ", name);

function sayName() {
    console.log("Line number is 6 ", name)

}
function sayName2() {
    let name = "rahul"
    console.log("Line number is 11", name);


    function sayName3() {
        console.log("Line number is 15 ", name)

    }
}

sayName();
sayName2();
sayName3();


