/*
Create an endless stream that yields prime numbers. The stream must be able to produce a million primes in a few seconds.
*/

class Primes {
  static *stream() {
    const primes = [];
    let num = 2;

    while (true) {
      let isPrime = true;
      const sqrt = Math.sqrt(num);

      for (let p of primes) {
        if (p > sqrt) break;
        if (num % p === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(num);
        yield num;
      }

      num++;
    }
  }
}

const stream = Primes.stream();
console.log(stream.next().value); // 2
console.log(stream.next().value); // 3
console.log(stream.next().value); // 5
