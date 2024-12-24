let computer={cpu:12,RAM:"8GB"}

let tomHardware={}
//dunder :: __
console.log(`computer `,computer.__proto__);

let lenovo={

    screen:"HD",
    __proto__:computer

}

console.log(`Lenovo `, lenovo)
console.log(`Lenovo `, lenovo.__proto__)