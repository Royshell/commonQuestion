function sortyByClass(passengers) {
  const sortedArr = [];
  const firstArr = [];

  passengers.forEach((passenger) => {
    const currentPass = {...passenger};

    if(passenger.class === 'econonmy') { 
      sortedArr.unshift(currentPass);
    } else if(passenger.class === 'business') {
      sortedArr.push(currentPass);
    } else {
      firstArr.push(passenger);
    }
  });
  return [...sortedArr, ...firstArr];
}
