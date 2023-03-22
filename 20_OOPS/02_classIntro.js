class product{
    //properties ->variable -> data member
    name;
    price;
    rating;



    // behaviours -> function ->member function
    //eg. display , buy ,rate etc.

    display(){
        console.log("display the current product")
    }
}
//properties alag hoti and behaviour same hote hai



const p=new product();
console.log(p);
p.display();