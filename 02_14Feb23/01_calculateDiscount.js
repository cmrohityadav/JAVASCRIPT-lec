// formula
// discount=(cost-selling)/cost*100 
let sellingPrice=199
let costPrice=799

let discountPercentage=((costPrice-sellingPrice)/costPrice)*100;

console.log("Discount Percenatge is : ", discountPercentage);
let display=Math.round(discountPercentage);

console.log(display,"% off");

