// 1
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };
  
// 2
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

// 3
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// 4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// 5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// 6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// 8
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//     name,
//     price,
//     image,
//     tags,
//   // Change code above this line
// };

// 9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
// console.log('keys :>> ', keys);
// console.log('values :>> ', values);

// 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }

// 12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
  
//   if (object.hasOwnProperty(key)) {
//   propCount += 1;
// 	}
// }
//   // Change code above this line
//   return propCount;
// }

// 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// 	for (const key of keys) {
//   		values.push(apartment[key]);
// 	}

// 14
// function countProps(object) {
//   // Change code below this line
//     const keys = Object.keys(object);
//     return keys.length;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
//     }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// 18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         }
//         // Change code above this line
//     }
//     return null;
// }

// console.log(getProductPrice("Radar"));

// 19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const props = [];
//     for (const product of products) {
//         if (product[propName] !== undefined) {
//             props.push(product[propName]);
//         }
//     }
//     return props;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));
//  console.log(getAllPropValues("category")); 

// 20
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     for (const product of products) {
//         // console.log('product :>> ', product);
//         if (productName === product.name) {
//             return product.price * product.quantity;
//         }
//     }
//     return 0;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));

// 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, 
//        today: highToday, 
//        tomorrow: highTomorrow, 
//        icon:  highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//     today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, 
//  } = forecast;

// 26
// Change code below this line
// function calculateMeanTemperature(forecast) {
//     const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh }, 
//  } = forecast;
    
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// 29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// 30
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
// 	const newData = { category: 'General', priority: 'Normal', ...data, completed: false };
//   return newData;
//   // Change code above this line
// }

//                 ИЛИ

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
// const newData = { category: category, priority: priority, ...data, completed: completed };
//   return newData;
//   // Change code above this line
// }

// 31
// Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
//   // Change code above this line
// }

// console.log(add(15, 27));

// 32
// Change code below this line
// function addOverNum(number, ...args) {
//   let total = 0;

//     for (const arg of args) {
//         if (arg > number) {
//         total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// 33
// Change code below this line
// function findMatches(firstArg, ...secondArg) {
//   const matches = []; // Don't change this line
//     for (const arg of secondArg) {
//         if (firstArg.includes(arg)) {
//             matches.push(arg);
//         }
//     }
//   // Change code above this line
//   return matches;
// }

// 34
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//   	return `Deleting book ${bookName}`;
//   }, 
//   updateBook(oldName, newName) {
//   	return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// 35
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);
    
//       return this.books;
//     // Change code above this line
//   },
// };

// 36
// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// 37
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   }
//   // Change code above this line
// };

// 38
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     return this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//       this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };

// 40
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  const potionIndex = this.potions.indexOf(oldName);
//       this.potions.splice(potionIndex, 1, newName);
//     // Change code above this line
//   },
// };

// 41
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
//         for (let potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Potion ${newPotion.name} is already equipped!`;
//             }
//         }
//         this.potions.push(newPotion);
//         return this.potions;
//     },
//     removePotion(potionName) {
//         for(let i=0; i < this.potions.length; i += 1) {
//             if(this.potions[i].name === potionName) {
//                 this.potions.splice(i, 1);
//                 return this.potions;
//             }
//             }
//             return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         for(let i=0; i < this.potions.length; i += 1) {
//             if(this.potions[i].name === oldName) {
//                 this.potions[i].name = newName;
//                 return this.potions;
//             }
//             }
//             return `Potion ${oldName} is not in inventory!`;
//     }
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Hard style"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Hard style", "Polymorth"));