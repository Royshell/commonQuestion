function getLuckyFloorNumber(n) {
  const luckyNumbers = [];
  let i = 1;
 

  while (i <= n) {
    const badNumber = (i + '').indexOf('4') > -1 || (i + '').indexOf('13') > -1; 

    if (!badNumber) {
      if (luckyNumbers[i -1] && luckyNumbers[i -1] === luckyNumbers[i]) {
        i++;
        n++;
      } else {
        luckyNumbers.push(i);
        i++;
      }

    } else {
      i++;
      n++;
    }
  }

  return luckyNumbers[luckyNumbers.length - 1];
}
