/*
To run:

If you have node installed:

$ node bubble-sort.js

Note:
compare adjascent elements
[j-1, j]
*/

// const bubbleSort = (list) => {
//     let length = list.length;
//     for (let i = 0; i < length; i++) {
//         let swapped = false;
//         for (let j = 1; j < length; j++) {
//             if (list[j] < list[j - 1]) {
//                 let largerValue = list[j - 1]
//                 let smallerValue = list[j];
//                 list[j - 1] = smallerValue;
//                 list[j] = largerValue;
//                 swapped = true;
//             }
//         }
//         // If no more swapping is required, can exit loop early
//         if (!swapped) {
//             break;
//         }
//     }
//     return list;
// };

// let list = [4,1,2,3];
// let result = bubbleSort(list);

// console.log(result);




// const bubbleSort = (list) => {
//     let length = list.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length; j++) {
//             if (list[j-1] > list[j]) {
//                 let smallerValue = list[j];
//                 let biggerValue = list[j-1];
//                 list[j-1] = smallerValue;
//                 list[j] = biggerValue;
//             }
//         }
//     }
//     return list;
// };

// let list = [9,8,7,6,5,45,3,2,1];

// let result = bubbleSort(list);

// console.log(result);



// const alteredBubbleSort = (list) => {
//     let length = list.length;
//     for (let i = 0; i < length; i++) {
//         let swapped = false;
//         for (let j = 0; j < length; j++) {
//             if (list[j-1] > list[j]) {
//                 let smallerValue = list[j];
//                 let biggerValue = list[j-1];
//                 list[j-1] = smallerValue;
//                 list[j] = biggerValue;
//                 swapped = true;
//             }
//         }
//         if (swapped == false) {
//             break;
//         }
//     }
//     return list;
// };

// let secondList = [55, 9,8,7,6,5,41, 42, 43, 44, 45];

// let secondResult = alteredBubbleSort(secondList);

// console.log(secondResult);



const bubbleSort = (list) => {
    let length = list.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if  (list[j] < list[j-1]) {
                let high = list[j-1];
                let low = list[j];
                list[j-1] = low;
                list[j] = high;
            }
        }
    }
    return list;
};

let list = [9,8,7,6,5,4,3,2,1];
let result = bubbleSort(list);

console.log(result);


























