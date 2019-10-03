/*

checking for lowest number, then swapping that number out

*/

function selectionSort(list) {

    // get the lowest number and it's index
    // then swap out the current number with that index and continue

    let listLength = list.length;

    for (let i = 0; i < listLength; i++) {

        let minNum = list[i];
        let minNumPosition = i;

        for (let k = i; k < listLength; k++) {
            if (list[k] < minNum) {
                minNum = list[k];
                minNumPosition = k;
            }
        }

        if (minNum < list[i]) {
            var num = list[i];
            list[minNumPosition] = num;
            list[i] = minNum;
        }
        
    }

    return list;

}

let list = [7,1,6,2,5,3,4,9,8]; 

console.log(list);

let result = selectionSort(list);

console.log(result);