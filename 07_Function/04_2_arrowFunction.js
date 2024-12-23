()=>{

}

const addTwo=(num1 ,num2)=>{
 return num1+num2;
}

const add=(num1,num2)=> num1+num2;


const add2=(num1,num2)=> (num1+num2);

const add3=(num1,num2)=> ({name:"rohit"});

const calculateTotal=(price,qty)=>{
    return price*qty;

}
// below code is also fine :: just write in one single line
// calculateTotal=(price,qty)=>return price*qty;
let totalCost=calculateTotal(10,50)
console.log(totalCost)