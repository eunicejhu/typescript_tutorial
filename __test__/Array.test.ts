import { Fibonacci, swap, BubbleSort } from "../tutos/Array";

describe("Fibonacci test cases", () => {
  test("Fibonacci(0) should be 0", () => {
    expect(Fibonacci(0)).toBe(0);
  });

  test("Fibonacci(1) should be 1", () => {
    expect(Fibonacci(1)).toBe(1);
  });

  test("Fibonacci(10) should be 55", () => {
    expect(Fibonacci(10)).toBe(55);
  });

  test("Fibonacci(20) should be 6765", () => {
    expect(Fibonacci(20)).toBe(6765);
  });
});

describe("swap", () => {
  test(" swap([1,2], 0, 1) returns [2, 1] ", () => {
    const input = [1, 2];
    const expected = [2, 1];
    const result = swap(input, 0, 1);
    expect(result).toEqual(expected);
  });
  test(" swap([1,2], 1, 2) should throw error ", () => {
    const input = [1, 2];
    const expected = new Error("index is out of range");
    const result = swap(input, 1, 2);
    expect(result).toThrowError(expected);
  });
});

describe("BubbleSort", () => {
  test.only("array should be sorted incrementally", () => {
    const input = [3, 5, 1, 2, 6, 10, 54, 33];
    const expected = [1, 2, 3, 5, 6, 10, 33, 54];
    const result = BubbleSort(input);
    expect(result).toEqual(expected);
  });
});
