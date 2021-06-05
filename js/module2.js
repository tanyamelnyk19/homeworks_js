// 1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";
  
//   // Change code above this line
// }

// 3
// function checkStorage(available, ordered) {
//   // Change code below this line
  
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } 
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
 
//   return "The order is accepted, our manager will contact you";
 
//   // Change code above this line
// }

// 4
// Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

// 5
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement); 

// 6
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// 7
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// 8
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// 9
// function getExtremeElements(array) {
//   // Change code below this line
//  const args = Array.from(array);
//  const firstElement = args[0];
//  const lastElement = args[args.length - 1];
//  return [firstElement, lastElement]

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// 10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// 11
// function calculateEngravingPrice(message, pricePerWord) {
//     let words;
//    // Change code below this line
//     words = message.split(" ");
//     return words.length * pricePerWord;
//    // Change code above this line
// }
// console.log('calculateEngravingPrice("JavaScript is in my blood", 10) :>> ', calculateEngravingPrice("JavaScript is in my blood", 10));

// 12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// 13
// function slugify(title) {
//   // Change code below this line
//     const lowerTitle = title.toLowerCase();
//     const array = lowerTitle.split(" ");
//     const slug = array.join('-');
//     return slug;
//   // Change code above this line
// }
// console.log('slugify("Arrays for begginers") :>> ', slugify("Arrays for begginers"));

// 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     const newArray = firstArray.concat(secondArray);
// if (newArray.length > maxLength) {
// return newArray.slice(0, maxLength);
// }
// return newArray;

//     // Change code above this line
//   }

// 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// 18
// function calculateTotal(number) {
//  // Change code below this line
//     let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//        total += i;
// }
//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(3));

// 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) { 
//   total += order[i];
// }
//   // Change code above this line
//   return total;
// }

// 21
