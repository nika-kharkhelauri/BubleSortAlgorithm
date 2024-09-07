// ---------------------------------------------- Buble Sort Algoritm ----------------------------------------------------

// I Option:
function bubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let value = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = value;
      }
    }
  }
  return arr;
}
console.log(bubleSort([3, 5, 1, 9, 6, 4]));

// II Option:
// function bubleSort(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(bubleSort([3, 5, 1, 9, 6, 4]));
