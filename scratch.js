// function isEven(value){
//   let ticks = 0
//   ticks++
//   console.log(ticks)
//   if (value % 2 == 0){
//     return true;
//   }
//   else
//     return false;
// }

// O(1) runtime complexity
// console.log(isEven(28528752278562))

// function areYouHere(arr1, arr2) {
//   let ticks = 0
//   for (let i = 0; i < arr1.length; i++) {
//     ticks++
//     console.log(ticks)
//     const el1 = arr1[i]
//     for (let j = 0; j < arr2.length; j++) {
//       ticks++
//       console.log(ticks)
//       const el2 = arr2[j]
//       if (el1 === el2) {
//         console.log(ticks)
//         return true
//       }
//     }
//   }
//   return false
// }

// // O(n^2) runtime complexity
// areYouHere([1, 2, 3, 4, 5, 6, 7], [9, 8, 7, 6, 5, 4])

// function doubleArrayValues(array) {
//     for (let i=0; i<array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// Linear - O(n) runtime complexity

// function naiveSearch(array, item) {
//     for (let i=0; i<array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// Linear - O(n) runtime complexity

// function createPairs(arr) {
//   let ticks = 0
//   for (let i = 0; i < arr.length; i++) {
//     ticks++
//     console.log('ticks', ticks)
//     for (let j = i + 1; j < arr.length; j++) {
//       ticks++
//       console.log('ticks2', ticks)
//       console.log(arr[i] + ', ' + arr[j])
//     }
//   }
// }


// Exponential Growth O (2^n)??/

// createPairs([1,2])
// createPairs([1,2,3])
// createPairs([1,2,3,4])

// // Computing fibonaccis
// // A fibonacci sequence is one where every number is the sum of the previous two numbers in the sequence. For example the following is a fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34. The first number always starts at 1 (technically it is 0). Then the second number is 0+1 = 1, the third number is the sum of the first and the second numbers (1 + 1 = 2) and the sequence continues in a similar manner.

// // Here, we have a function generateFib that uses iteration to generate a fibonacci sequence. Determine its run time complexity in big O.

// function generateFib(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {

//     // we're adding the first item
//     // to the result list, append the
//     // number 0 to results
//     if (i === 1) {
//       result.push(0);
//     }
//     // ...and if it's the second item
//     // append 1
//     else if (i == 2) {
//       result.push(1);
//     }

//     // otherwise, sum the two previous result items, and append that value to results.
//     else {
//       result.push(result[i - 2] + result[i - 3]);
//     }
//   }
//   // once the for loop finishes
//   // we return `result`.
//   return result;
// }

// O(n) Linear Runtime Complexity 

// An Efficient Search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above.

// Assume that the input array is always sorted.

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

// O(log(n)) runtime complexity. 
// **It is also characteristic of logarithmic algorithms that they cut the problem size in half each round through.**

// Random element
// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// O(1) Runtime Complexity

// Is it prime?
function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

O(n log(n)) Runtime Complexity