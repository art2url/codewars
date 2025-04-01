/*
Story:
You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

Problem:
You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

Examples:
You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

5 --> 1
And in case of 12 you need 6 toasts less (but not -6):

12 --> 6
Good luck!
*/

func sixToast(_ num: Int) -> Int {
    return abs(num - 6)
}

import XCTest

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Sample Test Cases", testSample),
    ]

    func testSample() {
        XCTAssertEqual(sixToast(15), 9, "Incorrect answer for num = 15")
        XCTAssertEqual(sixToast(6), 0, "Incorrect answer for num = 6")
        XCTAssertEqual(sixToast(7), 1, "Incorrect answer for num = 7")
        XCTAssertEqual(sixToast(4), 2, "Incorrect answer for num = 4")
        XCTAssertEqual(sixToast(0), 6, "Incorrect answer for num = 0")
        XCTAssertEqual(sixToast(10), 4, "Incorrect answer for num = 10")
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])