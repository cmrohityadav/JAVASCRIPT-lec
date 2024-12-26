class CoffeeMachine{

    start(){
        //callDB
        // filter Values
        return "starting the Machine....."
    }

    brewCoffee(){
        //complex calculation
        return " Brewing coffee"
    }

    singleClick(){
        let oneMsg=this.start();
        let twoMsg=this.brewCoffee()

        return ` ${oneMsg}  + ${twoMsg}`
    }


}

let tataCoffeeMachine=new CoffeeMachine();
console.log(tataCoffeeMachine.start())
console.log(tataCoffeeMachine.brewCoffee())

console.log(tataCoffeeMachine.singleClick())