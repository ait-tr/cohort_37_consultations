// let price = prompt('Price');
let price = 200;

if (price > 200) {
  console.log("No sale");
} else if (price == 200) {
  console.log("sale");
} else {
  console.log("no product");
}

// Функции Math
let num = 3.99999;
console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));

let randomNum = Math.round(Math.random() * 100);
console.log(randomNum);

let square = Math.sqrt(randomNum);
console.log(square);

let roundedNum1 = Math.round(square*10000000)/10000000;
console.log(roundedNum1);

let roundedNum2 = square.toFixed(7);
console.log(roundedNum2);


