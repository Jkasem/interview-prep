// Using a recursive depth first approach to find the depth of each leaf and then return if they are all equal
// Using breadth first approach to find the bottom level and check that all of the leaves live on the same level

const checkBalanced = rootNode => {
  //   if (!rootNode) return true;
  //   const queue = [[rootNode, 0]];
  //   let min = null;
  //   let max = null;
  //   while (queue.length) {
  //     const current = queue.shift();
  //     if (current[0].left === null || current[0].right === null) {
  //       if (min === null) min = current[1];
  //       if (queue.length === 0) max = current[1];
  //     }
  //     if (current[0].left) queue.push([current[0].left, current[1]++]);
  //     if (current[0].right) queue.push([current[0].right, current[1]++]);
  //   }
  //   console.log(min, max);
  //   return min === max;
};

/* Some console.log tests */
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const root = new BinaryTreeNode(5);
console.log(checkBalanced(root)); // should print true

root.insertLeft(10);
console.log(checkBalanced(root)); // should print false

root.insertRight(11);
console.log(checkBalanced(root)); // should print true;
