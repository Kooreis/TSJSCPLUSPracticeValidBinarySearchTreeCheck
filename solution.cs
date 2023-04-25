Here is a JavaScript solution for the problem:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isValidBST(node, min = null, max = null) {
        if (!node) return true;
        if (min !== null && node.data <= min) return false;
        if (max !== null && node.data >= max) return false;

        return this.isValidBST(node.left, min, node.data) && this.isValidBST(node.right, node.data, max);
    }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.right.left = new Node(11);
tree.root.right.right = new Node(20);

console.log(tree.isValidBST(tree.root)); // true
```

This code first defines a `Node` class for the nodes of the binary tree, and a `BinaryTree` class for the tree itself. The `isValidBST` method checks if a binary tree is a valid binary search tree. It does this by recursively checking each node to ensure that all nodes on the left are less than the current node and all nodes on the right are greater. If any node does not meet this condition, the method returns `false`. If all nodes meet this condition, the method returns `true`. The `console.log` statement at the end tests the `isValidBST` method on a sample binary tree.