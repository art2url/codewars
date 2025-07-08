/*
Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.

In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.
*/

function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice);
}

console.log('howManyTimes(40, 15) =', howManyTimes(40, 15)); // 3
console.log('howManyTimes(30, 10) =', howManyTimes(30, 10)); // 3
console.log('howManyTimes(80, 15) =', howManyTimes(80, 15)); //  6
