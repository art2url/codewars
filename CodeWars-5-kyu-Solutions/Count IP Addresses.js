/*
Description:
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(start, end) {
  const ipToInt = ip => ip
    .split('.')
    .reduce((acc, octet) => acc * 256 + Number(octet), 0);

  return ipToInt(end) - ipToInt(start);
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1")); // 1
console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); // 246
console.log(ipsBetween("0.0.0.0", "255.255.255.255")); // 4294967295