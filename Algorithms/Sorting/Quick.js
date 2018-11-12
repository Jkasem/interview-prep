/* 
1) Pick a pivot point
    2) Partition the array into two sub-arrays
        3) Call quicksort on sub-arrays
*/

// Basic Implementation : Pivot is first element
const quicksort = array => {
  if (array.length < 1) return array;
  const pivot = array[array.length / 2];
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

/* 
Average runtime of O(n log n), worst runtime of O(n^2) 
Performance depends a lot of the pivot that is chosen
The constant in quicksort makes it faster than mergesort
*/

// Hoare and Lomuto partition sceheme
