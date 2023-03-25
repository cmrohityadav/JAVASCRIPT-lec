const product=function (n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;

}
const q=new product("mac",4555,4)
console.log(q)

//we cant use arrow function
// the theory of this keyword  pointing to calling context is not applicable with arrow function
