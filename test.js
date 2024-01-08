class Animals{
    constructor(sound,food){
            this.sound=sound;
            this.food=food;
    }

    awaj(){
        console.log(`Animal ki awaj ${this.sound}`)
    }
    khana(){
        console.log(`Animal ki khana ${this.food}`)

    }

}

let cat =new Animals("meow","rat");
cat.awaj();
cat.khana();

class bird extends Animals{

    fly(){
        console.log(`bird can fly`)
    }
    awaj(){
        super.awaj()
        console.log("this is bird voice")
    }
}

let gauriya =new bird("chhiichiii","insect");
gauriya.fly()
gauriya.awaj()