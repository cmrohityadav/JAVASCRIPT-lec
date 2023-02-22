let obj={id:101,name:"Rohit", surName:"yadav"};
console.log(obj);


let emptyObject= new Object();
console.log(emptyObject);
emptyObject.id=102;
emptyObject.name="Rahul";
emptyObject.SurName="Yadav";
console.log(emptyObject);

// using function 
console.log('using function');
function details(i,j,k){
    this.id=i;
    this.name=j;
    this.surName=k;
}
const e= new details(103,"piyush","Yadav");
console.log(e);

// accesing key value
console.log(obj.name    );
console.log(obj['name']);
// above both syntax are same
obj.name="xyz";
console.log(obj.name);

