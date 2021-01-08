function validAnagram(word1, word2){

  // if the words are different in length it is false automatically
  if (word1.length != word2.length) {
    console.log('false', word1, word2);
    return false;
  }

  // If the words are blank - they match so it is true
  if ((word1.length == 0) && (word2.length == 0)) {
    console.log('true', word1, word2);
    return true;
  }

  // set two blank objects to store string information
  let freqCounter1 = {};
  let freqCounter2 = {};

  // populate object if not in set to 0 and initialize counter to 1
  // if already in, increase counter
  for(let letter of word1) {
    // freqCounter1[letter] = (freqCounter1[letter] || 0) + 1;
    freqCounter1[letter] ? (freqCounter1[letter] += 1) : freqCounter1[letter] = 1;
  }



  for(let letter of word2) {
    freqCounter2[letter] ? (freqCounter2[letter] += 1) : freqCounter2[letter] = 1;
    // freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
  }

  console.log(freqCounter1, freqCounter2);

  // check the contents for freqCounter1 are in freqCounter 2 with same counter #'s
  for (let key in freqCounter1) {

    // console.log('in key counter', word1, word2);

    // does the key in ctr 1 exist in  ctr 2
    console.log("key",key);
    if (!(key in freqCounter2)) {
      console.log('false key 1 not in 2', word1, word2);
      return false;
    }

    // does the key VALUE of 1 = key VALUE of 2 (counter # must be the same)
    if (freqCounter1[key] !== freqCounter2[key]) {
      console.log('false counter 1 <> counter 2', word1, word2);
      return false;
    }
  }
  console.log('true', word1, word2);
  return true;
}
// validAnagram('Carolle', 'elloraC');

// validAnagram('', '');
validAnagram('aaz', 'zza');
// validAnagram('anagram', 'nagaram');
// validAnagram('rat', 'car');
// validAnagram('awesome', 'awesom');
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana');
// validAnagram('qwerty', 'qeywrt');
// validAnagram('texttwisttime', 'timetwisttext')
