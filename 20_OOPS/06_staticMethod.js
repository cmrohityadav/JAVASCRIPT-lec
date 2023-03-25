class product{
    //properties ->variable -> data member
    name;
    price;
    rating;

    constructor(n,p,r){
        // console.log("im constructor")
        this.name=n;
        this.price=p;
        this.rating=r;
        // //return 10; if u r returning primitive then it will be avoided in constructor
        // return {x:0,y:20} //if u return non primitive then it will be returned
    }
   static custom(){
     console.log("calling a static method")
   }



    // behaviours -> function ->member function
    //eg. display , buy ,rate etc.

    display(){
        console.log("this refer to", this)
        console.log("display the current product")
    }
}
//properties alag hoti and behaviour same hote hai



const p=new product("realme",10000,4.8); // new -> creates an empty plain object
//above piece of code we are calling the constructor method
console.log(p);
// p.display();

//+++++++++++++++++++++++++++++++++++++++++++++
// p.custom()  //it give error
product.custom();

//++++++++++++++++++++++++++++++++++++++
console.log(p.name)
p.name="sumsung 2323";
console.log(p.name)