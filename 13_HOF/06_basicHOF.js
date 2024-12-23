function makeTea(typeOfTea){
    return `$ From Make Tea function: Type of Tea:: ${typeOfTea}`

}


function processTeaOrder(anyFunction){
    return anyFunction("lemon tea")
}


let order=processTeaOrder(makeTea)
//console.log(order)



//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function createTeaMaker(){

    return function (teaType){
        return `Making ${teaType}`;
    }
}

let teaMaker=createTeaMaker()
console.log(teaMaker)
console.log(teaMaker())
console.log(teaMaker("Ginger"))










