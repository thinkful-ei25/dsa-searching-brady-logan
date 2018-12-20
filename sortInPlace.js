//loop through the array
//swap array[i] with array[index random number]
const string =
  '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26';
const dataSet = string.split(' ').map(num => Number(num));
function sortInPlace(arr) {
  let random = 0;
  for (let i = 0; i < arr.length; i++) {
    random = Math.floor(Math.random() * arr.length);
    let temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

sortInPlace(dataSet);
