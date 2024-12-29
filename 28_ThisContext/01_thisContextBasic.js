const person={
    name:"Rohit",
    greet:function(){
        console.log(`hi , I am ${this.name}`)
    }
}

person.greet();

//now here will context is loss
const greetFunction=person.greet
greetFunction() // here undefined bcz context is loss

const boundGreet=person.greet.bind({name:"rahul"})
console.log(boundGreet())