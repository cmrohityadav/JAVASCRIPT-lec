class Bird{

    fly(){

        return `Flying....`
    }
}

class Penguin extends Bird{
     fly(){
        return `Penguins can't fly`
     }
}

let gauriBird=new Bird()
console.log(gauriBird.fly())
let icePenguin=new Penguin()
console.log(icePenguin.fly())
