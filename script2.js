// O(log n) — Logarithmic Time, Binary Search
function binarySearch(array, x) {
  let l = 0;
  let r = array.length - 1;
  let midIndex;

  while (r >= l) {
    midIndex = l + Math.floor((r - l) / 2);

    if (array[midIndex] === x) {
      return midIndex;
    }

    if (array[midIndex] > x) {
      r = midIndex - 1;
    }

    if (array[midIndex] < x) {
      l = midIndex + 1;
    }
  }

  return -1;
}

const binarySearchResult = binarySearch([15, 24, 30, 48, 49, 64, 86, 90, 100, 121, 130], 100);
console.log(binarySearchResult);
