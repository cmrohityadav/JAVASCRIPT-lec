let emptySet=new Set();
console.log(emptySet.size)

let myArray=[1,2,3,4,2,3,1]
let newSet=new Set(myArray)
console.log(newSet)

newSet.add(9)
console.log(newSet)
console.log(newSet.has(10))
