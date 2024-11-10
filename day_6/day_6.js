// 1

// for (i = 0; i <= 10; i++) {
//     console.log(i)
// }

// j = 0
// while (j <= 10) {
//     console.log(j)
//     j++
// }

// k = 0
// do {
//     console.log(k)
//     k++
// } while (k <= 10);

// 2

// for (i = 10; i >= 0; i--) {
//     console.log(i)
// }

// j = 10
// while (j >= 0) {
//     console.log(j)
//     j--
// }

// k = 10
// do {
//     console.log(k)
//     k--
// } while (k >= 0);

// 3

// n = prompt()
// for (i = 0; i <= n; i++) {
//     console.log(i)
// }

// 4

// string = ''
// for (i = 1; i <= 7; i++) {
//     string+='#'
//     console.log(string)
// }

// 5

// for (i = 0; i <= 10; i++) {
//     console.log(i + ' x ' + i + ' = ' + i * i)
// }

// 6

// console.log('i    i^2    i^3')
// for (i = 0; i <= 10; i++) {
//     console.log(i + '    ' + i**2 + '    ' + i**3)
// }

// 7

// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// 8

// for (i = 0; i <= 100; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }

// 9

// for (num = 2; num <= 100; num++) {
//     for (i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         break;
//       }
//     }
//     if (i > Math.sqrt(num)) {
//       console.log(num);
//     }
//   }

// 10

// sum = 0
// for (i = 0; i <= 100; i++) {
//     sum+=i
// }
// console.log(sum)

// 11

// sumEvens = 0
// sumOdds = 0
// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sumEvens+=i
//     } else {
//         sumOdds+=i
//     }
    
// }
// console.log(sumEvens, sumOdds)

// 12

// sumEvens = 0
// sumOdds = 0
// for (i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sumEvens+=i
//     } else {
//         sumOdds+=i
//     }
// }
// console.log([sumEvens, sumOdds])

// 13

// const randomArray = [];
// for (let i = 0; i < 5; i++) {
//   randomArray.push(Math.floor(Math.random() * 100));
// }

// console.log(randomArray);

// 14

// const randomNumbers = [];

// for (let i = 0; randomNumbers.length < 5; i++) {
//     const randomNumber = Math.floor(Math.random() * 100); // Генерация числа от 1 до 100

//     // Проверка на уникальность
//     if (!randomNumbers.includes(randomNumber)) {
//         randomNumbers.push(randomNumber);
//     }
// }

// console.log(randomNumbers);

// 15

// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// const randomId = [];

// for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomId.push(characters[randomIndex]);
// }

// const idString = randomId.join('');
// console.log(idString);