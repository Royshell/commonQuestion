function invokeAfterNtimes(f,n) {
  let counter = 0;

  return function g() {
      counter++;
      
      if (counter > n) {
        return f(...arguments);
      }
  }
}

