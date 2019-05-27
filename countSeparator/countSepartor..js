function countseparator(arr) {
  const numsMap = {};
  let sepratedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (numsMap[arr[i]]) {
      numsMap[arr[i]]++;
    } else {
      numsMap[arr[i]] = 1;
    }
  }
  
  for (let key in numsMap) {
    sepratedArr.push(key + ':' + numsMap[key]);
  }

  return sepratedArr;
}
