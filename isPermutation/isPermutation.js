function isPermutation(string1, string2) {

	if (string1.length != string2.length) {
		return false;
	}

	const charTable = {};

	for (let i = 0; i < string1.length; i++) {
		charTable[string1[i]] = charTable[string1[i]] ? charTable[string1[i]]++ : 1;
	}

	for (let i = 0; i < string2.length; i++) {
		if(charTable[string2[i]]) {
			charTable[string2[i]]--;
		} else {
			return false;
		}
	}

	for (let i in charTable) {
		if (charTable[i] != 0) {
			return false;
		} 
	}

  return true;
}

