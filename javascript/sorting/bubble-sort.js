/*
Steps

loop through a list
 loop through list again
  compare parent list element with child list element
   if parentEl < childEl, swap

*/

function bubbleSort(list) {

    let listLength = list.length;

    for (let i = 0; i < listLength; i ++) {
        for ( let k = 0; k < listLength; k++) {
            if (list[k] > list[i]) {
                let parentEl = list[i];
                let childEl = list[k];
                list[i] = childEl;
                list[k] = parentEl;
            } 
        }
    }

    return list;

}

let list = [5,4,6,3,2,8,1,9,7];

console.log(list);

let result = bubbleSort(list);

console.log(result);
