// 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//     orderedItems.forEach(number => totalPrice += number);
//   // Пиши код выше этой строки
//   return totalPrice;
// }

// 2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//   numbers.forEach(number => number > value ? filteredNumbers.push(number) : filteredNumbers);

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

// 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//     firstArray.forEach(number => secondArray.includes(number) ? commonElements.push(number) : commonElements);
//     return commonElements;
//     // Пиши код выше этой строки
// }

// 4
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// 5
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки

// 6
// // Пиши код ниже этой строки
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => totalPrice += item);
//   return totalPrice;
// }
// // Пиши код выше этой строки

// 7
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// 8
// // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
//   }

// 9
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArray = [];
//   numbers.forEach(element => element % 2 === 0 ? newArray.push(element + value) : newArray.push(element));
//   return newArray;
//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// 10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log('planetsLengths :>> ', planetsLengths);

// 11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
//   console.log('titles :>> ', titles);

// 12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap(book => book.genres);

// 13
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// /// Пиши код ниже этой строки
// const getUserNames = users => {
//   return users.map(user => user.name);

//   };
//   // Пиши код выше этой строки

// 14
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//     return users.map(user => user.email);

//   };
//   // Пиши код выше этой строки

// 15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log('evenNumbers :>> ', evenNumbers);

// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log('oddNumbers :>> ', oddNumbers);

// 16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
//   console.log('allGenres :>> ', allGenres);
// const uniqueGenres = allGenres.filter((genre, index, arr) => arr.indexOf(genre) === index);
// console.log('uniqueGenres :>> ', uniqueGenres);

// 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log('topRatedBooks :>> ', topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log('booksByAuthor :>> ', booksByAuthor);

// 18
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);

// };
// // Пиши код выше этой строки

// 19
// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge);

// };
// // Пиши код выше этой строки

// 20
// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
// // Пиши код выше этой строки

// 21
// Пиши код ниже этой строки
// const getFriends = (users) => {
//   return users.flatMap(user => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index);
// };
// // Пиши код выше этой строки

// 22
// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive);
// };
// // Пиши код выше этой строки

// 23
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//    return users.filter(user => !user.isActive);
// };
// // Пиши код выше этой строки

// 24
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// 25
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
// // Пиши код выше этой строки

// 26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArrayconst firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray;
// const anyElementInFirstIsOdd = firstArray;

// const anyElementInSecondIsEven = secondArray;
// const anyElementInSecondIsOdd = secondArray;

// const anyElementInThirdIsEven = thirdArray;
// const anyElementInThirdIsOdd = thirdArray;

// console.log('eachElementInFirstIsEven :>> ', eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);
// console.log('eachElementInFirstIsOdd :>> ', eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// 27
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive);
// };
// // Пиши код выше этой строки

// 28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

// 29
// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//    return users.some(user => user.isActive);
// };
// // Пиши код выше этой строки

// 30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// Пиши код ниже этой строки
// 1
// const totalAveragePlaytimePerGame = players.map(player => player.playtime / player.gamesPlayed)
//   .reduce((previousValue, number) => previousValue + number, 0);
// // 2
// const totalAveragePlaytimePerGame = players.reduce((total, player) => total + player.playtime / player.gamesPlayed, 0);

// 32
// Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance
//   , 0);
// };
// // Пиши код выше этой строки

// 33
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((total, user) => total + user.friends.length
//     , 0);
// };
// // Пиши код выше этой строки

// 34
