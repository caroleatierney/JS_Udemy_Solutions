function sameFrequency(num1, num2){
  let freq1 = {};
  let freq2 = {};

  let n1 = num1.toString();
  let n2 = num2.toString();

  if (n1.length != n2.length) {
    return false;
  }

  for (let num of n1) {
    freq1[num] = (freq1[num] || 0) + 1;
  }

  for (let num of n2) {
    freq2[num] = (freq2[num] || 0) + 1;
  }



  for (let key in freq1) {
    console.log(key);
    // check if the key is in second number's object
    if (!(freq1[key] in freq2)) {
      console.log(freq1); // freq 1 object
      console.log(freq2); // freq 2 object
      console.log(freq1[key], freq2[key]) // counter value
      console.log(key); // key value]);
      return false;
    }

    // check if the key count is same in second number's object
    if (freq1[key] != freq2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(182, 281)) // true
// console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22, 222)) // false
