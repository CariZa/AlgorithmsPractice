/*

To run:

If you have node installed:

$ node selection-sort.js

Hint:
Uses modified insertion sort
Recursively halves

*/

// const modifiedInsertionSort = (list, startIndex = 0, increment = 2) => {
//     let length = list.length;
//     // incremented loop
//     for (let i = startIndex; i < length; i = i + increment) { // skips first one? I think?
//         let jValue = Math.floor(i + increment, length - 1); // Get the smallest between the two
//         for (let j = jValue; j - increment >= 0; j = j - increment) {
//             if(list[j-increment] > list[j]) {
//                 let lowValue = list[j];
//                 let highValue = list[j-increment];
//                 list[j-increment] = lowValue;
//                 list[j] = highValue;
//             } else {
//                 break;
//             }
//         }
//     }
//     return list;
// };

// const shellSort = (list) => {
//     let length = list.length;
//     let increment = length / 2;
//     while (increment >= 1) {
//         for(let startIndex = 0; startIndex < increment; startIndex++) {
//             modifiedInsertionSort(list, startIndex, Math.floor(increment));
//         }
//         increment = increment / 2;
//     }

//     return list;
// };

// let list = [1,23,33,4,6,7,8,9,3,4];
// let result = shellSort(list);

// console.log(list);


// const modifiedInsertionSort = (list, startIndex, increment) => {
//     let length = list.length;
//     for (let i = 0; i < length; i = i + increment) { // 0, 5, 10, 15 etc.
//         let jValue = Math.min(i + increment, length - 1); // get either the length, or the next increment jump
//         for (let j = jValue; j - increment >= 0; j = j - increment) {
//             if (list[j] < list[j-increment]) {
//                 let lowValue = list[j];
//                 let highValue = list[j-increment];
//                 list[j] = highValue;
//                 list[j-increment] = lowValue;
//             } else {
//                 break;
//             }
//         }
//     }
//     return list;
// };

// const shellSort = (list) => {
//     let incrementBy = 2;
//     let length = list.length;
//     let increment = length / 2;

//     while(increment >= 1) {
//         for (let i = 0; i < increment; i ++) {
//             modifiedInsertionSort(list, i, increment);
//         }
//         increment = Math.floor(increment / 2);
//     }

//     return list;
// };

// let list = [1,23,33,4,6,7,8,9,3,4];
// let result = shellSort(list);

// console.log(result);


const modifiedInsertion = (list, start, increment) => {
    let length = list.length;
    for (let i = 0; i < length; i = i + increment) {
        let jValue = Math.min(i + increment, length - 1);
        for (let j = i; (j-increment) >= 0; j = j - increment) {
            console.log(i, j, increment, "i+inc", i + increment, "j-inc", j - increment);
            if (list[j] < list[j-increment]) {

                let low = list[j];
                let high = list[j-increment];

                list[j] = high;
                list[j-increment] = low;
            }
        }
    }
};


const shellSort = (list) => {
    let length = list.length;
    let increment = Math.floor(length/2);

    while(increment >= 1) {
        for (i = 0; i < increment; i++) {
            console.log(i, increment);
            modifiedInsertion(list, i, increment);
        }
        increment = increment / 2;
    }

    return list;
};

let list = [9,8,7,6,55,4,3,2,1];
let result = shellSort(list);

console.log(result);
