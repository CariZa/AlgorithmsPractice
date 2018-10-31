/*
Just playing with an idea using bubble sort thinking
*/

// The typical 101 version, loop within a loop - tried it from scratch before looking at other solutions 

var list = [9,4,2,7,2,8,1];

function bubbleLoop(first) {
    if (typeof first !== "object") {
        return ["invalid list"];
    }
    console.log([].concat(first));
    var i = 0;
    for (i; i < first.length - 1; i++) {
        var k = i + 1;
        for(k; k < first.length; k++) {
            var compareFirst = first[i];
            var compareSecond = first[k];
            console.log(first, compareSecond, '<',compareFirst);
            if (compareSecond < compareFirst) {
                first[i] = compareSecond;
                first[k] = compareFirst;
            }
            
        }
    }
    return first;
}

let sortedBubbleLoop = bubbleLoop(list);
console.log('bubbleLoop sorted',sortedBubbleLoop);



// Recursive bubble loop practice - tried it from scratch before looking at other solutions

var list = [9,4,2,7,2,8,1];

function recursiveBubbleLoop(list, start, sorted = true) {

    var compareFirst = list[start];
    var compareSecond = list[start+1];

    if (!compareSecond) {
        if (sorted) {
            return list;
        }
        return recursiveBubbleLoop(list, 0, true);
    }

    if (compareSecond < compareFirst) {
        list[start] = compareSecond;
        list[start + 1] = compareFirst
        sorted = false;
    }

    return recursiveBubbleLoop(list, start+1, sorted);

}

let sortedRecursiveBubbleLoop = recursiveBubbleLoop(list, 0);
console.log('sortedRecursiveBubbleLoop sorted', sortedRecursiveBubbleLoop);



// Copied this bubble sort from the imposter handbook 

const imposterBubbleSort = (list) => {
    const doItAgain = false;
    const limit = list.length;
    const defaultNextVal = Number.POSITIVE_INFINITY;
    var i = 0;
    for (i; i < limit; i++) {
        let thisValue = list[i];
        let nextValue = i + 1 < limit ? list[i+1] : defaultNextValue;
        if(nextValue < thisValue) {
            list[i] = nextValue;
            list[i + 1] = isValue;
            doItAgain = true;
        }
    }
    if (doItAgain) imposterBubbleSort(list);
}


var list = [9,4,2,7,2,8,1];
let sortedImposterBubbleSort = imposterBubbleSort(list);
console.log('sortedImposterBubbleSort sorted', sortedImposterBubbleSort);
