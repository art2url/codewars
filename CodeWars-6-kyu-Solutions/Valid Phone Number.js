/*
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/

function validPhoneNumber(phoneNumber) {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
}

console.log(validPhoneNumber('(123) 456-7890')); // true
console.log(validPhoneNumber('(1111)555 2345')); // false
console.log(validPhoneNumber('(098) 123 4567')); // false
console.log(validPhoneNumber('(123)456-7890')); // false
console.log(validPhoneNumber('123-456-7890')); // false
