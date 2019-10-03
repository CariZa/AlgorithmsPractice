class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data) {
            if (this.left === null) {
                this.left = new Node(data);
            } else {
                this.left.insert(data);
            }
        }
        if(data > this.data) {
            if(this.right === null) {
                this.right = new Node(data);
            } else {
                this.right.insert(data);
            }
        }
    }

    contains(data) {
        if (data == this.data) {
            return this;
        }

        if (this.left && data < this.data) {
            return this.left.contains(data);
        }

        if(this.right && data > this.data) {
            return this.right.contains(data);
        }

        return null;
    }

}

module.exports = Node;

//      o
//    o   o
//   o o o o