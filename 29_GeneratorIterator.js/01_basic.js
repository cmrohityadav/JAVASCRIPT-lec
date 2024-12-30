function * numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

let gen=numberGenerator()
let gen2=numberGenerator()

console.log("gen 1 :",gen.next().value)
console.log("gen 1 :",gen.next().value)
console.log("gen 1 :",gen.next().value)
console.log("gen 2 :",gen2.next().value)
console.log("gen 2 :",gen2.next().value)
console.log("gen 2 :",gen2.next().value)