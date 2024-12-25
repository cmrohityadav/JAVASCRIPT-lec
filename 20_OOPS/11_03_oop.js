//object in js

let car={
    make:"Toyota",
    model:"camry",
    year:2020,
    start:function(){
        return  `${this.make} car got started in ${this.year}`
    }
}

console.log(car.start())

function Person(name,age){
    this.name=name;
    this.age=age
}

let rohit=new Person("rohit",22)