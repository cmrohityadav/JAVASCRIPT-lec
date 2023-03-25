function product(n,p,r){

    this.name=n;
    this.price=p;
    this.rating=r;

}
const p=new product("hp",560000,5);
console.log(p);
/*
 1. this keyword in js is diff than other languages
 2. this keyword refer to the context from where we call
 3. in the function constructor also
    -if u return primitive it is ignored and we  return the object referred by this
    -if u return a custom obj, then custom obj is returned
    -if you dont return anything , then object referred by this returned
*/

let x={
    r:product
};

x.r("realme",2000,5)
console.log(x)