function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
//change to while loop with divisor > 0 as condition
//can also just write an if statement at beginning of function:
//if (divisor <= 0)
//  return factors; //can also return whatever you want, such as -1
