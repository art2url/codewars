/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/

func sum_str(_ a: String, _ b: String) -> String {
    let num1 = Int(a) ?? 0
    let num2 = Int(b) ?? 0
    return String(num1 + num2)
}

XCTAssertEqual(sum_str("4", "5"), "9")
XCTAssertEqual(sum_str("34", "5"), "39")
XCTAssertEqual(sum_str("9", ""), "9")
XCTAssertEqual(sum_str("", ""), "0")
XCTAssertEqual(sum_str("-5", "3"), "-2")