let price = 1000;
let discountpercent = 10
 // 10% discount
 function calculateDiscountedPrice(price, discountPercent) {
 return price - (price * discountPercent) / 100;
}
console.log(calculateDiscountedPrice(price, discountpercent));