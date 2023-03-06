const cartBill=[20,30,50];
const sumOfCartBill=cartBill.reduce((prev,current)=>
    prev+current,0
)
console.log(sumOfCartBill)