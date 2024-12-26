class Vehicle{

    constructor(make,model){
        this.make=make;
        this.model=model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle{

    drive(){
        return `${this.make} : This is an Inheritance example`;
    }
}

let myCar=new Car("TATA","alto")

console.log(myCar.drive())
console.log(myCar.start())
