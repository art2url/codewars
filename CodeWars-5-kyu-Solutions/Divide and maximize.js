/*
Description:
Your friend has a list of k numbers: [a1, a2, a3, ... ak].

He is allowed to do an operation which consists of three steps:

select two numbers: ai and aj (ai % 2 = 0)
replace ai with ai / 2
replace aj with aj * 2
Help him to find the maximum sum of list elements that is possible to achieve by using this operation (possibly multiple times).
Return this sum modulo 1_000_000_007, because it can be quite big.

Input
List of k elements: [a1, a2, a3, ..., ak]; k < 10**4
All numbers are positive and smaller than 10**9

Output
Maximum sum after some operations (modulo 1_000_000_007)
*/

function divideAndMultiply(bigints) {
  const MOD = 1000000007n;

  let totalShifts = 0n;
  let bases = [];

  for (let num of bigints) {
    let shifts = 0n;
    while (num % 2n === 0n) {
      num /= 2n;
      shifts++;
    }
    totalShifts += shifts;
    bases.push(num);
  }

  // Find the largest base (this will be doubled totalShifts times)
  let maxIndex = 0;
  for (let i = 1; i < bases.length; i++) {
    if (bases[i] > bases[maxIndex]) {
      maxIndex = i;
    }
  }

  bases[maxIndex] *= 2n ** totalShifts;

  let sum = 0n;
  for (let base of bases) {
    sum = (sum + base) % MOD;
  }

  return sum;
}

console.log(divideAndMultiply([10n])); // 10
console.log(divideAndMultiply([3n, 4n])); // 13
console.log(divideAndMultiply([6n, 4n, 2n])); // 50
console.log(divideAndMultiply([6n, 4n, 5n])); // 44
console.log(divideAndMultiply([1n, 2n, 3n, 4n, 5n])); // 46
console.log(
  divideAndMultiply([
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
    8n,
  ])
); // 371842558
console.log(divideAndMultiply([14n, 9n, 26n])); // 68
