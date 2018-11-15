Inorder - left, root, right

````const inorderTraversal = (root) => {
    const stack = [];
    const output = [];
    let currentNode = root;
    while (currentNode != null || stack.length > 0) {
        while (currentNode != null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        currentNode = stack.pop();
        output.push(currentNode.val);
        currentNode = currentNode.right;
    }
    return output;
};```

Preorder - Root, left, right
Postorder - left, right, root
level order -  BFS
````
