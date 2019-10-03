/*
To run:

If you have node installed:

$ node insertion-sort.js

*/

// const insertionSort = (list) => {
//     let length = list.length;
//     for (let i = 0; i < length - 1; i++) {
//         let swapped = false;
//         for (let j = i + 1; j > 0; j--) {
//             if (list[j] < list[j -1]) {
//                 let smaller = list[j];
//                 let larger = list[j-1];
//                 list[j-1] = smaller;
//                 list[j] = larger;
//                 swapped = true;
//             } else {
//                 break;
//             }
//         }
//     }
//     return list;
// }

// let list = [18, 55, 34, 24, 1, 88, 199, 33,65, 74, 28];
// let result = insertionSort(list);

// console.log(result);



// const insertionSort = (list) => {
//     let length = list.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (list[j] < list[j-1]) {
//                 let lowValue = list[j];
//                 let highValue = list[j-1];
//                 list[j] = highValue;
//                 list[j-1] = lowValue;
//             }
//         }
//     }
//     return list;
// }

// let list = [9, 8, 7, 6, 55, 4, 3, 2, 1];
// let result = insertionSort(list);

// console.log(result);




// loop to length
// inner loop from i to 0 --


// const insertionSort = (list) => {
//     let length = list.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (list[j] < list[j-1]) {
//                 let low = list[j-1];
//                 let high = list[j];
//                 list[j-1] = high;
//                 list[j] = low;
//             }
//         }
//     }
//     return list;
// };

// let list = [9,8,7,6,5,4,3,2,1];
// let result = insertionSort(list);

// console.log(result);


let isertionSort = (list) => {
    let length = list.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j > 0; j--) {
            if (list[j] < list[j-1]) {
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
let result = isertionSort(list);

console.log(result);
