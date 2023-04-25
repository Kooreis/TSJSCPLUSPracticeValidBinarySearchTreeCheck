```cpp
#include <iostream>
#include <climits>

using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

Node* newNode(int data) {
    Node* node = new Node();
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return(node);
}

bool isBSTUtil(Node* node, int min, int max) {
    if (node == NULL)
        return true;
    if (node->data < min || node->data > max)
        return false;
    return
        isBSTUtil(node->left, min, node->data - 1) &&
        isBSTUtil(node->right, node->data + 1, max);
}

bool isBST(Node* node) {
    return(isBSTUtil(node, INT_MIN, INT_MAX));
}

int main() {
    Node* root = newNode(4);
    root->left = newNode(2);
    root->right = newNode(5);
    root->left->left = newNode(1);
    root->left->right = newNode(3);

    if (isBST(root))
        cout << "Is BST";
    else
        cout << "Not a BST";

    return 0;
}
```