//or constructor function

function Person(name,age){
     this.name=name;
     this.age=age
}


function Car(make,model){
    this.make=make;
    this.model=model;
}

let carRy= new Car("Toyota","Camry")
console.log(carRy)

let carV=new Car("Tata","safari")
console.log(carV)

function Tea(type){
    this.type=type;
    this.describe=function(){
        return  `this is a cup of ${this.type}`
    }
}

let lemonTea=new Tea("lemon tea")
console.log(lemonTea)
console.log(lemonTea.describe())