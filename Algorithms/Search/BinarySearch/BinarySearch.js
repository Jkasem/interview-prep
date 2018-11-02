const args = process.argv;
if (args.length < 3) {
  console.log(
    "ERROR: Supply a target integer between 0 and 20 to search.\n Usage: node BinarySeach.js [target]\n"
  );
  process.exitCode = 9;
} else {
  //// Main Algorithm
  const BinarySearch = (array, target) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
      const midpoint = Math.floor((low + high) / 2);
      if (array[midpoint] === target) return midpoint;
      if (target < array[midpoint]) {
        high = midpoint - 1;
      } else {
        low = midpoint + 1;
      }
    }
    return false;
  };

  //// Console output
  const testArray = [];
  for (let i = 0; i < 11; i++) {
    testArray.push(Math.floor(Math.random() * 21));
  }
  testArray.sort((a, b) => a - b);
  const index = BinarySearch(testArray, parseInt(args[2]), 10);
  console.log(
    `\n[${testArray}]\n${index ? "  ".repeat(index) + " ^\n" : "Not found\n"}`
  );
}
