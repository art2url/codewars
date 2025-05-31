/*
Description:
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

func digits(num n: UInt64) -> Int {
  return String(n).count
}

import XCTest

class SampleTest: XCTestCase {
  static var all = [
    ("Digits", digitsTest),
  ]

  func digitsTest() {
    XCTAssertEqual(1,  digits(num: 5))
    XCTAssertEqual(5,  digits(num: 12345))
    XCTAssertEqual(10, digits(num: 9876543210))
  }
}

XCTMain([
  testCase(SampleTest.all)
])