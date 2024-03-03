import { it, expect } from "vitest";
import { insertionSort } from "./insertionSort";

it("should sort numbers in ascending order", function () {
  expect(insertionSort([5, 1, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  expect(insertionSort([1, 2, 3])).toEqual([1, 2, 3]);
  expect(insertionSort([])).toEqual([]);
});
