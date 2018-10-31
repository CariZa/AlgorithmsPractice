let arr1 = [];
let arr2 = [];
let arr3 = [];

function game(a, b, c, num_discs) {
    if (num_discs <= 0) {
        return;
    }
    arr1.push(a);
    arr2.push(b);
    arr3.push(c);
    game(a, c, b, num_discs - 1);
    console.log("Iteration "+num_discs+". Moved disk-"+num_discs+" from " + a + " to " + b);
    game(c, b, a, num_discs - 1);
    console.log("moo ", arr1, arr2, arr3);
}

game('rod1', 'rod2','rod3', 4)