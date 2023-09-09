//++++++++++++++++++++++++++++++++
//Spread
const oneArray=[1,2,3,4]
const twoArray=[5,6,7,8]
// const threeArray=oneArray.concat(twoArray);
// const threeArray=[oneArray,twoArray]

//spread Operator-> sare element ko spread kr do
const threeArray=[...oneArray,...twoArray] //spread
// ...oneArray => 1,2,3,4  
// ...oneArray => 5,6,7,8

console.log(threeArray)




// +++++++++++++++++++++++++++++++++++
//REST
// function manyArguments(){
//     let args=Array.from(arguments);
//     let finalArr=args.map(e =>e)
//     console.log(typeof arguments)
//     console.log(finalArr);
// }

// function manyArgumentv2(...args){
//     let finalArr=args.map(e=>e)
//     console.log(typeof args)
//     console.log(finalArr)
// }

// manyArguments(1,2,3)
// manyArgumentv2(1,2,3)
// manyArguments(1,2,3,4,5,6,7)

