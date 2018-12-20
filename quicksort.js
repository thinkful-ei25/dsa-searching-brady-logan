'use strict';

const string = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26';
const dataSet = string.split(' ').map(num => Number(num));

let counter = 0;
function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    counter += 1;
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
    counter += 1;
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  counter += 1;
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log('quick sort', qSort(dataSet));
console.log('counter ' + counter);
