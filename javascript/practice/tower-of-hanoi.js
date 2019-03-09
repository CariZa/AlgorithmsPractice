function move_discs(n, A, B, C) {
    /*
    3 Steps:
    -------------------
    - T(n-1, A, C, B)
    - T(1, A, B, C)
    - T(n-1, B, A, C)
    */
    if (n < 1) {
        return;
    } else if(n == 1) {
        console.log(n, A, B, C);
    } else {
        move_discs(n-1, A, C, B);
        move_discs(1, A, B, C);
        move_discs(n-1, B, A, C);
    }
}

move_discs(4, "a", "b", "c");