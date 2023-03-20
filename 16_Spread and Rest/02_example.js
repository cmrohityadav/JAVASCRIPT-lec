const names=["superman","flash"]
const newNames=["batman",...names,"thor"]
console.log(newNames)


//++++++++++++++
const sitename="rohit";
console.log([...sitename]);


//+++++++++++
function pwskills(...values){
    return values
}
console.log(pwskills("superman","flash"))