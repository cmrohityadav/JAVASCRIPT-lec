let myHeros=["thor","spiderman"]
let dcHeros=["batman","flash","superman"]


let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rohit=function(){

    console.log(`Rohit is present in all object`);
}



console.log(myHeros.rohit())
console.log(heropower.rohit())


Array.prototype.heyRohit=function(){
    console.log(`rohit say hiiiii`)
}

console.log(myHeros.heyRohit());
console.log(heropower.heyRohit())
