/*
To run:

If you have node installed:

$ node merge-sort.js

Hint:
Uses merge sort
*/

// const halveArray = (list) => {
//     if (list.length < 2) {
//         return list;
//     }
//     let length = list.length;
//     let half = Math.ceil(length/2);
//     // split array in 2
//     let half_1 = list.slice(0,half) || [];
//     let half_2 = list.slice(half, length) || [];
//     return mergeSort(halveArray(half_1), halveArray(half_2));
// }

// const mergeSort = (half_1, half_2) => {
//     // keep halving arrays, until no more halves and then order them and recombine thems
//     let merged = [];

//     while(half_1.length && half_2.length) {
//         if (half_1[0] <= half_2[0]) {
//             merged.push(half_1.shift());
//         } else {
//             merged.push(half_2.shift());
//         }
//     }
//     return [...merged, ...half_1, ...half_2 ];
// };

// let list = [9,8,7,33,6,55,5,63,4,3,2,1];
// let result = halveArray(list);

// console.log(result);




// const halve = (list) => {
//     if (list.length < 2) {
//         return list;
//     }

//     let length = list.length;
//     let half = Math.ceil(length/2);

//     let half_1 = list.slice(0, half);
//     let half_2 = list.slice(half, length);

//     return sort(halve(half_1), halve(half_2));
// }

// const sort = (half_1, half_2) => {
//     console.log(half_1, half_2);
//     let list = [];
//     while(half_1.length && half_2.length) {
//         if (half_1[0] < half_2[0]) {
//             list.push(half_1.shift());
//         } else {
//             list.push(half_2.shift());
//         }
//     }
//     return [...list, ...half_1, ...half_2];
// };

// let list = [9,8,7,6,5,4,3,2,1];
// let result = halve(list);

// console.log(result);

const sort = (half_1, half_2) => {
    let list = [];
    while(half_1.length && half_2.length) {
        if (half_1[0] < half_2[0]) {
            list.push(half_1.shift());
        } else {
            list.push(half_2.shift());
        }
    }
    return [...list, ...half_1, ...half_2];
};

const mergeSort = (list) => {
    if (list.length < 2) {
        return list;
    }
    let length = list.length;
    let half = Math.ceil(list.length/2);
    let half_1 = list.slice(0,half);
    let half_2 = list.slice(half, length);
    return sort(mergeSort(half_1), mergeSort(half_2));
};

let list = [9,8,7,6,5,4,3,2,1];
let result = mergeSort(list);

console.log(result);
