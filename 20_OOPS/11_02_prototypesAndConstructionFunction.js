function Animal(species){
    this.species=species
}

Animal.prototype.sound=function(){
    return `${this.species} make a sound`
}

let dog=new Animal("dog")

console.log(dog.sound())




///////////////////////////////////////////////////////////////

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }

    this.name=name;
}

let tea=new Drink("tea")
let coffee=Drink("coffee")


