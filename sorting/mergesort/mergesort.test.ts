import { mergesort, mergeSort } from "./mergesort";
import { describe, it, expect } from "vitest";

describe("merge", function () {
  it("is pure: does not mutate input arrays", function () {
    const arr1 = [1, 3, 4, 5];
    const arr2 = [2, 4, 6, 8];
    mergesort(arr1, arr2);
    expect(arr1).toEqual([1, 3, 4, 5]);
    expect(arr2).toEqual([2, 4, 6, 8]);
  });

  it("should merge sorted arrays ", function () {
    expect(mergesort([1, 3, 4], [2, 4, 6])).toEqual([1, 2, 3, 4, 4, 6]);
  });
});

describe("mergeSort", function () {
  it("should sort numbers in ascending order", function () {
    expect(mergeSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20]);
  });
});



