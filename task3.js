// *****************************************************
// ****************    NOT WORKING    ******************
// *****************************************************

function solution(A, B) {
    let freqA = {};
    let freqB = {};
    let ctr = 0;

  for (let ltr of A) {
    freqA[ltr] = (freqA[ltr] || 0) + 1;
  }

  for (let ltr of B) {
    freqB[ltr] = (freqB[ltr] || 0) + 1;
  }

  for (let key in freqA) {
    // check if the key is in second number's object
    if (!freqB[key]) {
      console.log('key', key);
      ctr++;
      continue;
    }

    // check if the key count is same in second number's object
    if (freqA[key] !== freqB[key]) {
      console.log('test1');
      ctr++;
    }
  }

  for (let key in freqB) {
    // check if the key is in second number's object
    if (!freqA[key]) {
      console.log('test1');
      ctr++;
    }
  }
  return ctr;
}

console.log(solution(['apple'], ['pear']));
console.log(solution(['lemon'], ['melon']));
console.log(solution(['rather'], ['harder']));
