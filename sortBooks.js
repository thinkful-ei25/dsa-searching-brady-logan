const string =
  'ABC 123 DOERAEME HELLOBOOK SADBOOK HAPPYBOOK HEPPYBOOK SLIME PLACE ABSCDAS';
const dataSet = string.split(' ').map(num => num.toLowerCase(num));

let qCounter = 0;
function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    qCounter += 1;
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
    qCounter += 1;
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  qCounter += 1;
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log('####### QSORT() #######');
console.log(qSort(dataSet));
console.log(qCounter);

let counter = 0;
function mSort(arr) {
  let length = arr.length;
  if (length <= 1) {
    counter += 1;
    return arr;
  }

  const mid = Math.floor(length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, arr);
}

function merge(left, right, arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let output = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    counter += 1;
    if (left[leftIndex] < right[rightIndex]) {
      arr[output++] = left[leftIndex++];
    } else {
      arr[output++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    counter += 1;
    arr[output++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    counter += 1;
    arr[output++] = right[i];
  }
  return arr;
}
console.log(' ');
console.log('####### MSORT() #######');
console.log(mSort(dataSet));
console.log(counter);

