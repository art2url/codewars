/*
Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

Write a function to help Bob with this calculation.
*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    console.log(`Calculating volume for cuboid:`);
    console.log(`Length: ${length}`);
    console.log(`Width: ${width}`);
    console.log(`Height: ${height}`);

    const volume = length * width * height;
    console.log(`Volume = ${length} × ${width} × ${height} = ${volume}`);
    console.log('---');

    return volume;
  }
}

const {assert} = require('chai');

describe('Tests', () => {
  it('Example tests', () => {
    const result1 = Kata.getVolumeOfCuboid(1, 2, 2);
    console.log(`Test 1 result: ${result1} (expected: 4)`);
    assert.strictEqual(result1, 4);

    const result2 = Kata.getVolumeOfCuboid(6, 2, 5);
    console.log(`Test 2 result: ${result2} (expected: 60)`);
    assert.strictEqual(result2, 60);

    console.log('All tests passed! ✅');
  });
});
