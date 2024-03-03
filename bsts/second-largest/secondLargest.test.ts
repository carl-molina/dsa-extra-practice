import { expect, it } from "vitest";
import { findSecondLargest } from "./secondLargest";
import { BSTNum } from "../common/bst";

it("finds the 2nd largest", function () {
  const bst = new BSTNum(null, [15, 20, 10, 12]);
  expect(findSecondLargest(bst.root)).toEqual(15);

  // const bst2 = new BSTNum(null, [20, 10]);
  // expect(findSecondLargest(bst2.root)).toEqual(10);
});

it("returns null if no 2nd highest", function () {
  const bst = new BSTNum(null, [15]);
  expect(findSecondLargest(bst.root)).toEqual(null);
});
