function Animal(type){
    this.type=type
}

Animal.prototype.speak=function(){
    return `${this.type} makes a sound`
}


Array.prototype.rohit=function(){
    return `Custom method ${this}`
}

let myArray=[0,1]
console.log(myArray.rohit())
let myNEwArray=[1,2,3,4,5]
console.log(myNEwArray.rohit())

