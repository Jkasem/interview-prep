/* 
1) Pick a pivot point
    2) Partition the array into two sub-arrays
        3) Call quicksort on sub-arrays
*/

const quicksort = array => {
  if (array.length < 1) return array;
  const pivot = array[0];
  const lower = [];
  const higher = [];
  for (let i = 1; i < array.length; i++) {
    if (pivot >= array[i]) lower.push(array[i]);
    else higher.push(array[i]);
  }
  return quicksort(lower)
    .concat(pivot)
    .concat(quicksort(higher));
};

console.log(quicksort([1, 5, 3, 2, 10, 9]));
