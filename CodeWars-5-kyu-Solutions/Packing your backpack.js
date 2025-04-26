/*
Description:
You're about to go on a trip around the world! On this trip you're bringing your trusted backpack, that anything fits into. The bad news is that the airline has informed you that your luggage cannot exceed a certain amount of weight.

To make sure you're bringing your most valuable items on this journey you've decided to give all your items a score that represents how valuable this item is to you. It's your job to pack your bag so that you get the most value out of the items that you decide to bring.

Your input will consist of two arrays, one for the scores and one for the weights. Your input will always be valid lists of equal length, so you don't have to worry about verifying your input.

You'll also be given a maximum weight. This is the weight that your backpack cannot exceed.

For instance, given these inputs:

scores = [15, 10, 9, 5]
weights = [1, 5, 3, 4]
capacity = 8
The maximum score will be 29. This number comes from bringing items 1, 3 and 4.

Note: Your solution will have to be efficient as the running time of your algorithm will be put to a test.
*/

function packBagpack(scores, weights, capacity) {}

describe('Fixed tests', function () {
  it('Example tests', function () {
    Test.assertEquals(packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 8), 29);
    Test.assertEquals(
      packBagpack([20, 5, 10, 40, 15, 25], [1, 2, 3, 8, 7, 4], 10),
      60
    );
  });
});

console.log(packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 8)); // 29
console.log(packBagpack([20, 5, 10, 40, 15, 25], [1, 2, 3, 8, 7, 4], 10)); // 60
console.log(packBagpack([10, 20, 30], [1, 1, 1], 2)); // 50
console.log(packBagpack([1, 2, 3], [4, 5, 1], 4)); // 3
console.log(packBagpack([100], [99], 98)); // 0
