

let myHeroes=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower: function (){
        console.log(`spidy power is ${this.spiderman}`)


    }
}

Object.prototype.rohit=function(){

    console.log(`rohit is present in all Objects`)
}

// heroPower.rohit();

// myHeroes.rohit();
Array.prototype.heyRohit=function(){

    console.log(`rohit say hello to only array`)
}



// heroPower.heyRohit() //it give error
// myHeroes.heyRohit()







