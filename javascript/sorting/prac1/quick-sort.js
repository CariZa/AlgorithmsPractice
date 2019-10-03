/*
To run:

If you have node installed:

$ node quick-sort.js
*/

const partition = (items, left, right) => {

}

const quickSort = (list, left, right) => {

    // use a pivot, and move elements lower before that pivot, and elements higher after that pivot

    // let pivot = list[0];
    let pivot = partition(list, left, right); // get the pivot position
    // 5
    if (pivot < list.length) {
        quickSort(list, 0, pivot);
        quickSort(list, pivot, list.length);
    }
    let right =


    return list;

};

let list = [9,8,7,6,55,5,4,33,3,2,44,1];

let result = quickSort(list, 0, list.length - 1);



// select a random pivot
// move all elements less before
// all elements after after

