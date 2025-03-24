/*
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

func maps(a: [Int]) -> [Int] {
    return a.map { $0 * 2 }
}

XCTAssertEqual(maps(a: [1, 2, 3]), [2, 4, 6])
XCTAssertEqual(maps(a: [1, -2, 3, 4, 5]), [2, -4, 6, 8, 10])
XCTAssertEqual(maps(a: []), [])