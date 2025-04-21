/*
You need to write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a digit
- only contains alphanumeric characters (note that '_' is not alphanumeric)
*/

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;

function testPassword(password, expected) {
  const result = REGEXP.test(password);
  const status = result === expected ? '✅ Passed' : '❌ Failed';
  console.log(`${status}: "${password}" => ${result} (expected: ${expected})`);
}

// Test cases
testPassword('fjd3IR9', true);
testPassword('ghdfj32', false);
testPassword('DSJKHD23', false);
testPassword('dsF43', false);
testPassword('4fdg5Fj3', true);
testPassword('DHSJdhjsU', false);
testPassword('fjd3IR9.;', false);
testPassword('fjd3  IR9', false);
testPassword('djI38D55', true);
testPassword('djI3_8D55', false);
testPassword('djI38D55@@', false);
