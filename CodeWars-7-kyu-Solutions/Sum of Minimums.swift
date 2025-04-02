/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/

unc sumOfMinimums(_ numbers: [[Int]]) -> Int {
    return numbers.map { $0.min() ?? 0 }.reduce(0, +)
}

import XCTest

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
    ]

    func testExample() {
        XCTAssertEqual(sumOfMinimums([[2,8,5,4,3], [8,3,4,5,6]]), 5, "Should be 5 (2 + 3)")
        XCTAssertEqual(sumOfMinimums([[1,6,3,11,32], [21,32,45,24,34], [8,12,13,6,3]]), 25, "Should be 25 (1 + 21 + 3)")
        XCTAssertEqual(sumOfMinimums([[7,1,4,3,6],[9,3,13,24,25],[23,35,37,47,56],[12,32,35,58,53],[22,24,35,47,56]]), 61)
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])
