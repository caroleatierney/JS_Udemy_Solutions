function same(arr1, arr2) {
  if (arr1.length !=arr2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let val of arr1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  console.log(freq1);
  console.log(freq2);

  // for in loops through by key and
  // checks if the same key squared is in freq2
  for (let key in freq1) {
    if (!(key ** 2 in freq2)) {
      return false;
    }

    // checks if this key's value (counter) exists
    // somewhere in freq2 with same value
    if (freq2[key ** 2] != freq1[key]) {
      return false;
    }
  }
  return true;
}

same([1,2,3,2], [9,1,4,4])
