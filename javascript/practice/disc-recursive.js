
// Recursive disc sort, 

// 1, 2, 3, 4, 5
// Must become 5, 4, 3, 2, 1

// Work out how many steps it will take to reverse the order

// 5, 4, 3
// 1, 1 to 2
// 2 1 to 3

// 1 to 3
// 5, 4, 3
// - 
// 2, 1 - 2 to 3




// rod 1 to rod 3, 5
// rod 1 to rod 2, 4
// rod 3 to rod 1, 5
// rod 1 to rod 

let rod1arr = [5, 4, 3, 2, 1];
let rod2arr = [];
let rod3arr = [];

function disc_reversal(rod1, rod2, rod3, discs, count = 0) {
    // move dics forwards 1
    // if no disc, or if empty put
    // 

    // currentDisc++;

    if (discs < 1) {
        return count;
    }

    // 1, 2, 3 -

    // 3, 1, 2 - 3
    // 2, 3, 1 - 2
    // 1, 2, 3 - 1

    ++count;

    // console.log("Moved disc from "+rod1+" to "+rod2+", dics num a: "+discs)

    count = disc_reversal(rod1, rod3, rod2, discs - 1, count); 

    console.log("Moved disc from "+rod1+" to "+rod2+", dics num a: "+discs)

    
    /*


    */

    // let disc3 = rod3arr.pop();
    // if (disc3)  rod1arr.push(disc3);

    // let disc = rod1arr.pop();
    // if (disc) rod2arr.push(disc);


    // let disc2 = rod1arr.pop();
    // if (disc2)  rod3arr.push(disc2);

    // 1, 2, 3 -

    // 2, 3, 1 - 3
    // 2, 3, 1 - 2
    // 1, 2, 3 - 1
    
    
    count = disc_reversal(rod3, rod2, rod1, discs - 1, count);
    

    // rod2 = rod3
    // rod3 = rod1

    // Moved disc from rod3 to rod1, dics num a: 3

    // console.log("Moved disc from "+rod2+" to "+rod3+", dics num: "+discs)

    console.log("======== LOOP "+discs+" =========");
    return count;


//     console.log('rod1arr', rod1arr);

//     console.log('rod2arr', rod2arr);
    
//     console.log('rod3arr', rod3arr);

//     console.log("rotation", discs);
}

// let result = disc_reversal("rod1", "rod2", "rod3", 5);
// console.log(result, "times");


function traversal_down(num) {
    console.log(num);
    if (num < 1) {
        return;
    }
    traversal_down(num - 1);
    // console.log(num);
}

function traversal_up(num) {
    if (num < 1) {
        return;
    }
    traversal_up(num - 1);
    console.log(num);
}

// traversal_up(5);
// console.log('traversal_up');


// traversal_down(5);
// console.log('traversal_down');




function nested_traversal_down(num, initiator) {
    
    if (num < 1) {
        return;
    }

    console.log(num, initiator); // 2, 1
    nested_traversal_down(num - 1, initiator || 'a'); //  2, 1

    // console.log(num, initiator); // 
    nested_traversal_down(num - 1, initiator || 'b');
    // console.log(num);

    // console.log(num, initiator); // 
    nested_traversal_down(num - 1, initiator || 'c');

    // console.log(num, initiator); // 
    nested_traversal_down(num - 1, initiator || 'd');

    console.log('----');
}

// nested_traversal_down(6);

// function traversal_up(num) {
//     if (num < 1) {
//         return;
//     }
//     traversal_up(num - 1);
//     console.log(num);
// }



function pyramid(levels, str = '', letter = 'a') {

    console.log(str);

    if (levels < 1) {
        return str;
    }

    // console.log(levels, str, letter);

    pyramid(levels - 1, str + 'a', 'a');
}

pyramid(4);

// console.log(resylt);


function combinations(levels, str = '', letter = 'a') {

    console.log(str);

    if (levels < 1) {
        return str;
    }

    // console.log(levels, str, letter);

    pyramid(levels - 1, str + 'a', 'a');
    
    pyramid(levels - 1, str + 'b', 'b');

    pyramid(levels - 1, str + 'c', 'c');

    // console.log(str);

}

pyramid(4);

