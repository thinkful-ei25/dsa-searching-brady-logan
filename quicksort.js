'use strict';
//best average case: nlogn
//worse case: n^2 when dataset already sorted 

const string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'
const dataSet = string.split(' ').map(num => Number(num));
// console.log(dataSet);
//1st: i=0 [30, 89, 25, 32, 72, 70] 
//2nd: i=2 j = 1 [30,25,89,32,72,70]
//3rd: j=2 i=3 [30,25,32,89,72,70]
//4th j =3 i = 5 [30,25,32,70,72,89]

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const mid = partition(array, start, end);
  array = qSort(array, start, mid);
  array = qSort(array, mid + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log('quick sort', qSort(dataSet));