let genericCar={tyres:4}
let tesla={
    driver:"AI"
}

Object.setPrototypeOf(tesla,genericCar)

console.log(`tesla `,tesla);
console.log(`tesla `,Object.getPrototypeOf(tesla));