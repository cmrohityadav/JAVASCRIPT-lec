const arr=[5,2,3]
const myTotal=arr.reduce(function(acc,cur){
    console.log(`acc:${acc} and current ${cur}`)
    return acc+cur
},0)

// console.log(myTotal)

//using arrow function

const total=arr.reduce((acc,curr)=> (acc+curr),0)

// console.log(total)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const finalPayment=shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(finalPayment)