/*
Description:
Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

The knight is not allowed to move off the board. The board is 8x8.

For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29

(Warning: many of the tests were generated randomly. If any do not work, the test cases will return the input, output, and expected output; please post them.)
*/

function knight(start, finish) {
  if (start === finish) return 0;

  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  const toCoords = (pos) => [
    pos.charCodeAt(0) - 97, // a=0, b=1, ..., h=7
    parseInt(pos[1]) - 1, // '1' = 0, ..., '8' = 7
  ];

  const [startX, startY] = toCoords(start);
  const [endX, endY] = toCoords(finish);

  const visited = Array.from({length: 8}, () => Array(8).fill(false));
  const queue = [[startX, startY, 0]];

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();

    for (const [dx, dy] of moves) {
      const [nx, ny] = [x + dx, y + dy];
      if (nx === endX && ny === endY) return steps + 1;
      if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  return -1; // should not be reached
}

console.log(knight('a1', 'c1')); // 2
console.log(knight('a1', 'f7')); // 5
