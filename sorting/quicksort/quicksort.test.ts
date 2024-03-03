import { expect, it } from "vitest";
import { quickSort, pivot } from "./quicksort";


it("should return the pivot index", function () {
  expect(pivot([5, 1, 3, 2, 4])).toBe(4);
  expect(pivot([3, 5, 1, 2, 4])).toBe(2);
  expect(pivot([1, 5, 3, 2, 4])).toBe(0);
});

it("should mutate and placing values on L/R of pivot", function () {
  const p1 = [5, 1, 3, 2, 4];
  pivot(p1);
  expect(p1).toEqual([4, 1, 3, 2, 5]);

  const p2 = [3, 5, 1, 2, 4];
  pivot(p2);
  expect(p2).toEqual([2, 1, 3, 5, 4]);

  const p3 = [1, 5, 3, 2, 4];
  pivot(p3);
  expect(p3).toEqual([1, 5, 3, 2, 4]);
});


it("should sort numbers in ascending order", function () {
  expect(quickSort([5, 1, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
  expect(quickSort([])).toEqual([]);
});
