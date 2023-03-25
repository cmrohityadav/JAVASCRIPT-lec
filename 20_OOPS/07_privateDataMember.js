class product{
  
    name;
    price;
    #rating; //for private we use the #


    constructor(n,p,r){
        console.log("im constructor")
        this.name=n;
        this.price=p;
        this.#rating=r;
       
    }



    

    display(){
       
        console.log("display the current product",this.name,this.price,this.#rating)
    }
}




const p=new product("realme",10000,4.8);
console.log(p)
p.display();
