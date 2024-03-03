import { describe, expect, it } from "vitest";
import {
  getDigit,
  getDigitCount,
  getHighDigitCount,
  radixSort,
} from "./radixSort";

describe("getDigit", function () {
  it("returns digit for positive ints", function () {
    expect(getDigit(123, 0)).toBe(3);
    expect(getDigit(123, 1)).toBe(2);
    expect(getDigit(123, 2)).toBe(1);
  });
});

describe("getDigitCount", function () {
  it("returns correct count for positive ints", function () {
    expect(getDigitCount(123)).toBe(3);
  });
});

describe("mostDigits", function () {
  it("returns correct count for arrays of positive ints", function () {
    expect(getHighDigitCount([1, 12, 123])).toBe(3);
  });
});

describe("radixSort", function () {
  it("should sort arrays of numbers", function () {
    expect(radixSort([5, 1, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(radixSort([50, 1, 3, 222, 41])).toEqual([1, 3, 41, 50, 222]);
    expect(radixSort([])).toEqual([]);
  });
});