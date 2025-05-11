/*
Description:
Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form [quotient, remainder].

- a and b can be very large (at the order of 10^150 to 10^200)
- As usual, your result should not have leading 0s
- require is disabled in JavaScript. Do it yourself ;-)
*/

function divideStrings(a, b) {
  if (b === '0') throw new Error('Division by zero');
  if (a === '0') return ['0', '0'];

  let quotient = '';
  let remainder = '';

  for (let i = 0; i < a.length; i++) {
    remainder += a[i];

    // Remove leading zeros
    remainder = remainder.replace(/^0+/, '') || '0';

    let count = 0;
    while (compareStrings(remainder, b) >= 0) {
      remainder = subtractStrings(remainder, b);
      count++;
    }

    quotient += count.toString();
  }

  // Strip leading zeros
  quotient = quotient.replace(/^0+/, '') || '0';
  remainder = remainder.replace(/^0+/, '') || '0';

  return [quotient, remainder];
}

function compareStrings(a, b) {
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  return a.localeCompare(b);
}

function subtractStrings(a, b) {
  let res = '';
  let carry = 0;

  a = a.split('').reverse();
  b = b.padStart(a.length, '0').split('').reverse();

  for (let i = 0; i < a.length; i++) {
    let digitA = +a[i];
    let digitB = +b[i] + carry;

    if (digitA < digitB) {
      digitA += 10;
      carry = 1;
    } else {
      carry = 0;
    }

    res = digitA - digitB + res;
  }

  return res.replace(/^0+/, '') || '0';
}

console.log(divideStrings('10', '2')); // ['5', '0']
console.log(divideStrings('123', '10')); // ['12', '3']
console.log(
  divideStrings('63829983432984289347293874', '90938498237058927340892374089')
);
// ['0', '63829983432984289347293874']

// Massive test
console.log(
  divideStrings(
    '95572125450918640412953147539641071144698584475827027985348667410451592044143428971135383424482164482067323382528842443328431691167091696017000',
    '2657485448675128195693904487625317723097507245030100694127861139975863010937861672143365811623591800'
  )
);
// ['35979077802245104', '2140044826470291962451106273547095290620631598656670517854944400270874472456442858810197892118591600']
