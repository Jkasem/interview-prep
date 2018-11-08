const selectionSort = array => {
  // default order is descending, extra parameter could be added to change this
  function findLargest(array) {
    let largest = array[0];
    let largestIndex = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
        largestIndex = i;
      }
    }
    return largestIndex;
  }
  let arrayCopy = array.slice();
  let sorted = [];
  for (let i = 0, length = arrayCopy.length; i < length; i++) {
    sorted.push(arrayCopy.splice(findLargest(arrayCopy), 1)[0]);
  }
  return sorted;
};

console.log(selectionSort([1, 5, 3, 2, 10, 9]));
