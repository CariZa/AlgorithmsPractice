/*
To run:

If you have node installed:

$ node selection-sort.js
*/

// const selectionSort = (list) => {
//     let length = list.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (list[i] > list[j]) {
//                 let smallerValue = list[j];
//                 list[j] = list[i];
//                 list[i] = smallerValue;
//             }
//         }
//     }

//     return list;

// }

// let unsortedList = [5,4,3,2,1];
// let result = selectionSort(unsortedList);

// console.log(result);


const selectionSort = (list) => {
    let length = list.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (list[i] < list[j]) {
                let highValue = list[j];
                let lowValue = list[i];
                list[j] = lowValue;
                list[i] = highValue;
            }
        }
    }
    return list;
};

let list = [9,8,7,6,55,4,3,2,1];
let result = selectionSort(list);

console.log(result);
