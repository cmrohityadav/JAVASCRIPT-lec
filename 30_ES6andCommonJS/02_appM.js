//Module import file
//default import
import  multiply from "./01_mathOperationsM.js"

console.log(multiply(10*5))

// named import
import { add,subtract } from "./01_mathOperationsM.js"
console.log(add(10+2))
console.log(subtract(10-2))
