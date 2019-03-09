/*
Practicing merge sort
*/

// NOTE: Uses the testingHelper.js code to run localised tests

// split until can't split any further

const splitArr = (arr, index = 0) => {
    let final = [];
    let middle = Math.ceil(arr.length / 2);
    final.push(arr.concat([]).slice(0,middle));
    let secondHalf = arr.concat([]).slice(middle, arr.length);
    if (secondHalf.length > 0) {
        final.push(secondHalf);
    }
    return final;
};

const splitTillSingle = (arr) => {

    let innerarr = [arr];

    // my exit is innerarr 
    const condition = (innerarr) => {
        return innerarr[0].length > 1
    };

    while(condition(innerarr)) {
        let splitarr = innerarr.map((arritem) => {
            return splitArr(arritem);
        });
        innerarr = Array.prototype.concat.apply([], splitarr);
    }

    return innerarr;
}



/// keep pairUp until fully sorted

const pairUp = (list) => {
    let total = list.length;
    let finalarr = [];
    for (var i = 0; i < total; i += 2) {
        var row = [];
        var a = list[i];
        var b = list[i + 1];
        if (b != undefined && a[0] < b[0]) {
            row = row.concat(a);
            if (b !== undefined) {
                row = row.concat(b)
            }
        } else {
            if (b !== undefined) {
                row = row.concat(b)
            }
            if (a !== undefined) {
                row = row.concat(a)
            }
        }
        console.log("row",row);
        finalarr.push(row);
    }
    return finalarr;
}

const sort = (list) => {
    let final = pairUp(list);

    let count = 0;

    while (final.length > 1 && count < 5) {
        final = pairUp(final);
        count++;
    }
    console.log(final);
    return final;

}

// Tests



// splitArr tests

var expectedValue = [[1,2,3],[4,5,6]];
var result = splitArr([1,2,3,4,5,6]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2,3,4,5],[6,7,8,9]];
var result = splitArr([1,2,3,4,5,6,7,8,9]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2,3,4,5],[6,7,8,9]];
var result = splitArr([1,2,3,4,5,6,7,8,9]);
expect(result).toBe(expectedValue);



// splitTillSingle tests

var expectedValue = [[1],[2],[3]];
var result = splitTillSingle([1,2,3]);
expect(result).toBe(expectedValue);

var expectedValue = [[1],[2],[3],[4],[5],[6],[7],[8],[9]];
var result = splitTillSingle([1,2,3,4,5,6,7,8,9]);
expect(result).toBe(expectedValue);

var expectedValue = ["1","2","3","4","5","6","7","8","9"];
var result = splitTillSingle("123456789");
expect(result).toBe(expectedValue);



// pairUp tests

var expectedValue = [[1,2],[3,4]];
var result = pairUp([[1],[2],[3],[4]]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2],[3,4],[5]];
var result = pairUp([[1],[2],[3],[4],[5]]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2,3,4],[5]];
var result = pairUp([[1,2],[3,4],[5]]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2,3,4],[5,6,7,8]];
var result = pairUp([[1,2],[3,4],[5,6],[7,8]]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2,3,4,5,6,7]];
var result = pairUp([[1,2,3,4],[5,6,7]]);
expect(result).toBe(expectedValue);



// pairUp tests & sorted

var expectedValue = [[1,2],[3,4]];
var result = pairUp([[2],[1],[4],[3]]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,9],[3,8]];
var result = pairUp([[9],[1],[8],[3]]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2,3,4],[5]];
var result = pairUp([[2],[1],[4],[3],[5]]);
result = pairUp(result);
expect(result).toBe(expectedValue);



// sort

var expectedValue = [[1,2,3,4,5]];
var result = sort([[2],[1],[4],[3],[5]]);
expect(result).toBe(expectedValue);

var expectedValue = [[1,2,3,4,5,8,9]];
var result = sort([[9],[8],[2],[1],[4],[3],[5]]);
expect(result).toBe(expectedValue);