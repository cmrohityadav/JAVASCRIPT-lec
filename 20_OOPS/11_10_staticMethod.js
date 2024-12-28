class Calculator{
    // Using static :any property and methods can't be use in instance or Object

    static add(a,b){
        return a+b;
    }
}


let miniCal=new Calculator()
//below code throw error:;it is the feature of static
//console.log(miniCal.add(3,5))

console.log(Calculator.add(3,2))


