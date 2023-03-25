class complexNumber{
    #real;
    #img;
    constructor(r,i){
        this.#img=i;
        this.#real=r;
    }


    display(){
        console.log(this.#real," +i", this.#img);
    }

    get real(){
        return this.#real;
    }
    get img(){
        return this.#img;
    }

    addComplexNumber(c){
        this.#img+=c.img;
        this.#real+=c.real;
    }
}

const c1=new complexNumber(2,3);
c1.display();
const c2=new complexNumber(4,5);
c1.addComplexNumber(c2);
c1.display()