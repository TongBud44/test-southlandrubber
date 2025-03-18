// เช็คจำนวนเฉพาะ
function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  //คำนวณ n!
  function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
  
  //รวมจำนวนเฉพาะ
  function sumPrimeFactorials(limit) {
    let sum = 0;
    for (let n = 2; n <= limit; n++) {
      if (isPrime(n)) {
        sum = sum + factorial(n);
      }
    }
    return sum;
  }
  
  const limit = 10;
  const result = sumPrimeFactorials(limit);
  console.log(result);
  