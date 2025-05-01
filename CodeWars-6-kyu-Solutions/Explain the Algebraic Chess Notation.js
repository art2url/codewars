/*
Description:
Here is a coding challenge that requires you to explain the chess notation given to you.

Input
A string representing a chess move in algebraic notation.

Output
A string describing what happened on the board as the result of the given move.

Examples:

"Nd4" -> "Knight moved to d4." "Rxb5" -> "Rook moved to b5 and captured." "g8=Q" -> "Pawn moved to g8 and promoted to queen."

Explanation of Algebraic Chess Notation and The Output for Each Case
Here are the letters for each piece:
K: King
Q: Queen
B: Bishop
R: Rook
N: Knight (N is used to avoid confusion with the King)
Pawns don't have a letter. If the move is by a pawn, it states the position it moved to (like "e4").
If a piece moves to another position, output "(piece) moved to (position)."

Examples:

"e4" -> "Pawn moved to e4."
"Na1" -> "Knight moved to a1."

Captures are denoted with an "x". If a pawn captures, the file the pawn starts on is given before the "x" (like "exd5").
If a piece moved to another square and captured output:

"(piece) moved to (position) and captured."

Examples:

"exd5" -> "Pawn moved to d5 and captured."
"Qxh8" -> "Queen moved to h8 and captured."

Checks are denoted with "+" and checkmates with "#". If the move involves a check or a checkmate, mention it accordingly:
"(piece) moved to (position), check."

"(piece) moved to (position), checkmate."
"(piece) moved to (position) and captured, check."
"(piece) moved to (position) and captured, checkmate."

Examples:

"Rb3+" -> "Rook moved to b3, check."
"gxf5#" -> "Pawn moved to f5 and captured, checkmate."

When disambiguating moves occur, we state the rank or file that the specific piece we are moving is on. This is how we would mention it:
"(piece) on file (file) moved to (position)."
"(piece) on rank (rank) moved to (position)."

Examples:

"Red5" -> "Rook on file e moved to d5."
"N1f6" -> "Knight on rank 1 moved to f6."

When a promotion occurs, we would state the position, an equal sign, and then the piece it promotes to. Here's how we would say that:
"Pawn moved to (position) and promoted to (piece)."

Examples:

"d8=Q" -> "Pawn moved to d8 and promoted to queen."
"f1=N" -> "Pawn moved to f1 and promoted to knight."

When en passant occurs, we would state the move, and add "e.p." to the end to note that it is an en passant:
"Pawn moved to (position), capturing en passant."

Examples:

"exf7 e.p." -> "Pawn moved to f7, capturing en passant.
"fxg2+ e.p." -> "Pawn moved to g2, capturing en passant, check."

When one of the players castles, we would denote this as "O-O" for a kingside castle and "O-O-O" for a queenside castle:
"A kingside castle."

"A queenside castle."

Examples:

"O-O" -> "A kingside castle."
"O-O-O" -> "A queenside castle."

In case you still don't understand, you can find more information about it by clicking on the following link:

Algebraic Chess Notation Wikipedia

Good luck!
*/

function toWords(move) {
  if (move === 'O-O') return 'A kingside castle.';
  if (move === 'O-O-O') return 'A queenside castle.';

  const pieceNames = {
    K: 'King',
    Q: 'Queen',
    B: 'Bishop',
    R: 'Rook',
    N: 'Knight',
  };

  let ep = false;
  if (move.endsWith(' e.p.')) {
    move = move.slice(0, -5);
    ep = true;
  }

  let check = '';
  if (move.endsWith('+')) {
    move = move.slice(0, -1);
    check = ', check';
  } else if (move.endsWith('#')) {
    move = move.slice(0, -1);
    check = ', checkmate';
  }

  // Promotion
  const promotionMatch = move.match(/^([a-h]x)?([a-h]\d)=([QRBN])$/);
  if (promotionMatch) {
    const [, , pos, promoted] = promotionMatch;
    return `Pawn moved to ${pos} and promoted to ${pieceNames[
      promoted
    ].toLowerCase()}${check}.`;
  }

  // En passant
  if (ep) {
    const epMatch = move.match(/^([a-h])x([a-h]\d)$/);
    if (epMatch) {
      const [, , pos] = epMatch;
      return `Pawn moved to ${pos}, capturing en passant${check}.`;
    }
  }

  // Disambiguation with file
  const disFileCapture = move.match(/^([QRBNK])([a-h])x([a-h]\d)$/);
  if (disFileCapture) {
    const [, piece, file, pos] = disFileCapture;
    return `${pieceNames[piece]} on file ${file} moved to ${pos} and captured${check}.`;
  }

  // Disambiguation with rank
  const disRankCapture = move.match(/^([QRBNK])(\d)x([a-h]\d)$/);
  if (disRankCapture) {
    const [, piece, rank, pos] = disRankCapture;
    return `${pieceNames[piece]} on rank ${rank} moved to ${pos} and captured${check}.`;
  }

  // Disambiguation (non-capture)
  const disFile = move.match(/^([QRBNK])([a-h])([a-h]\d)$/);
  if (disFile) {
    const [, piece, file, pos] = disFile;
    return `${pieceNames[piece]} on file ${file} moved to ${pos}${check}.`;
  }

  const disRank = move.match(/^([QRBNK])(\d)([a-h]\d)$/);
  if (disRank) {
    const [, piece, rank, pos] = disRank;
    return `${pieceNames[piece]} on rank ${rank} moved to ${pos}${check}.`;
  }

  // Piece capture
  const pieceCapture = move.match(/^([QRBNK])x([a-h]\d)$/);
  if (pieceCapture) {
    const [, piece, pos] = pieceCapture;
    return `${pieceNames[piece]} moved to ${pos} and captured${check}.`;
  }

  // Pawn capture
  const pawnCapture = move.match(/^([a-h])x([a-h]\d)$/);
  if (pawnCapture) {
    const [, , pos] = pawnCapture;
    return `Pawn moved to ${pos} and captured${check}.`;
  }

  // Piece move
  const pieceMove = move.match(/^([QRBNK])([a-h]\d)$/);
  if (pieceMove) {
    const [, piece, pos] = pieceMove;
    return `${pieceNames[piece]} moved to ${pos}${check}.`;
  }

  // Pawn move
  const pawnMove = move.match(/^([a-h]\d)$/);
  if (pawnMove) {
    return `Pawn moved to ${pawnMove[1]}${check}.`;
  }

  return '';
}

const results = [
  ['e5', 'Pawn moved to e5.'],
  ['Nd4', 'Knight moved to d4.'],
  ['O-O', 'A kingside castle.'],
  ['Qxd1+', 'Queen moved to d1 and captured, check.'],
  ['bxc5#', 'Pawn moved to c5 and captured, checkmate.'],
  ['d8=R', 'Pawn moved to d8 and promoted to rook.'],
  ['Rde5', 'Rook on file d moved to e5.'],
  ['exd6# e.p.', 'Pawn moved to d6, capturing en passant, checkmate.'],
  ['N7xc3#', 'Knight on rank 7 moved to c3 and captured, checkmate.'],
  ['bxa3#', 'Pawn moved to a3 and captured, checkmate.'],
  ['exf5', 'Pawn moved to f5 and captured.'],
  ['cxd4', 'Pawn moved to d4 and captured.'],
  ['fxe7', 'Pawn moved to e7 and captured.'],
  ['dxc7', 'Pawn moved to c7 and captured.'],
  ['cxb6', 'Pawn moved to b6 and captured.'],
  ['fxg7', 'Pawn moved to g7 and captured.'],
];

for (const [input, expected] of results) {
  const actual = toWords(input);
  console.log(
    `${input} ➜ ${actual} ${
      actual === expected ? '✅' : `❌ (Expected: ${expected})`
    }`
  );
}
