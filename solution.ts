function isValidBST(root: TreeNode | null, min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER): boolean {
    if (root === null) {
        return true;
    }

    if (root.value <= min || root.value >= max) {
        return false;
    }

    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}