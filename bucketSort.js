'use strict';

// input: [3, 4, 1, 2, 5]
// in advance we know low = 1, high = 5
// output: [1,2,3,4,5]

// move low to index 0, move high to end of array
// [1,3,4,2,5]

// for loop that runs length of array
const string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
const dataSet = string.split(' ').map(num => Number(num));

function bucketSort(array, low) {
  let length = array.length;
  let bucketSize = 5;
  let bucketArray = [];
  //create empty arrays
  if (length === 0) {
    return array;
  }
  for (let i = 0; i < length; i++) {
    bucketArray[i] = [];
  }
  // console.log(bucketArray);

  //pushing values into buckets
  array.forEach((item) => {
    bucketArray[Math.floor((item - low) / bucketSize)].push(item);
  });
  // console.log(bucketArray);

  //sort buckets
  array = [];
  bucketArray.map(bucket => bucket.sort((a, b) => a - b));
  // bucketArray.forEach(item => array.push(item));
  for (let i = 0; i < bucketArray.length; i++) {
    bucketArray[i].forEach(item => array.push(item));
  }
  return array;
}

console.log(bucketSort(dataSet, 1));