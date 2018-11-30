class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const BSTFromArray = array => {
  const insertNode = (left, right) => {
    if (left > right) return null;

    const mid = Math.floor((right + left) / 2);
    const node = new BinaryTreeNode(array[mid]);

    node.left = insertNode(left, mid - 1);
    node.right = insertNode(mid + 1, right);

    return node;
  };
  return insertNode(0, array.length - 1);
};

console.log(BSTFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
