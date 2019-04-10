function thirdLargest(numbers) {
  let firstLargest = numbers[0];
  let secondLargest = Number.MIN_VALUE;;
  let thirdLargest = Number.MIN_VALUE;

  if (numbers.length < 3) {
    return;
  }

  for (let i = 1; i < numbers.length; i ++) {
    if (numbers[i] > firstLargest) {
      thirdLargest = secondLargest;
      secondLargest = firstLargest;
      firstLargest= numbers[i];
    } else if (numbers[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = numbers[i];
    } else if (numbers[i] > thirdLargest) {
      thirdLargest= numbers[i];
    }
  }

  return thirdLargest;
}

