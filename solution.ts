Here is a TypeScript solution for the problem:

```typescript
class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root: TreeNode | null, min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER): boolean {
    if (root === null) {
        return true;
    }

    if (root.value <= min || root.value >= max) {
        return false;
    }

    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root)); // true

root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log(isValidBST(root)); // false
```

This solution uses a recursive function `isValidBST` to check if a binary tree is a valid binary search tree. The function checks if the value of the current node is within the valid range (between `min` and `max`). If it is, the function recursively checks the left and right subtrees. If the value of the current node is not within the valid range, the function returns `false`. The function returns `true` if the binary tree is a valid binary search tree, and `false` otherwise.