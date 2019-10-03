/*
Steps:

Loop over a list 
    then loop over everything prior to the current point { for i = 1, i < list.length }
        compare the parent loop element, with everything prior to parent loop (for j = 0, j < i)
            if smaller, swap parent loop element with child loop element


*/

function insertionSort(list) {

    for ( let i = 1; i <= list.length; i ++) {
        for ( let j = 0; j <= i; j++) {
            if (list[i] < list[j]) {
                let newEl = list[j];
                list[j] = list[i];
                list[i] = newEl;
            }
        }

    }

    return list;

}


let list = [ 2, 5, 1, 6, 7, 9, 3 ];

console.log(list);

let result = insertionSort(list);

console.log(result);

