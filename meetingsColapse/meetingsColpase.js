process.stdin.resume();
process.stdin.setEncoding('utf8');

const inputArray = [];

process.stdin.on('data', function (chunk) {
  const timeRange = chunk.trim().split(' ');  
  inputArray.push(timeRange);
});

process.stdin.on('end', function () {
  inputArray.sort((a,b) => a[0] > b[0]);

  for (let i = 1; i < inputArray.length; i++) {
    const currentStart = parseInt(inputArray[i][0]);
    const previousEnd = parseInt(inputArray[i - 1][1]);

    if(currentStart < previousEnd) {
      process.stdout.write('yes\n');
    } else {
      process.stdout.write('no\n');
    }
  }
});

