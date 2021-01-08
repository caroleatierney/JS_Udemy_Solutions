// set the pointers to the first two indices of the array

let ptr1, ptr2, unique = 0;

function countUniqueValues(arr){
  if (arr.length > 0) {
    unique = 1;
    ptr1 = 0;
    ptr2 = 1;
    compare(arr);
    return unique;
  } else {
    unique = 0;
    return unique;
  }
}

function compare(arr) {
  let num1 = arr[ptr1];
  let num2 = arr[ptr2];

  if (num1 != num2) {

    // Only increase pointer 1 when they dont match
    // set to the last index pointer 2 was at
    ptr1 = ptr2;
    unique ++;
    arr[ptr2];
  }
  // Always move the pointer2 to the right
  // leave when the end of array has been processed
  ptr2 ++;
  if (ptr2 == arr.length) {
    return unique;
  } else {
    compare(arr);
  }
}


countUniqueValues([1,1,1,1,1,2]);
console.log(unique);

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);
console.log(unique);

countUniqueValues([]);
console.log(unique);

countUniqueValues([-2,-1,-1,0,1]);
console.log(unique);
