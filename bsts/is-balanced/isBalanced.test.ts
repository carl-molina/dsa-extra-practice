import { it, expect } from "vitest";
import { isBalanced } from "./isBalanced";
import { BNodeNum} from "../common/bst";

it("checks if it is balanced", function () {
  //           50
  //        30    60
  //      20        70

  const root = new BNodeNum(50,
      new BNodeNum(30, new BNodeNum(20)),
      new BNodeNum(60, null, new BNodeNum(70)));
  expect(isBalanced(root)).toBe(true);
});

it("checks if it is balanced", function () {
  //           50
  //        30    60
  //      20        70
  //    10
  const root = new BNodeNum(50,
      new BNodeNum(30, new BNodeNum(20, new BNodeNum(10))),
      new BNodeNum(60, null, new BNodeNum(70)));
  expect(isBalanced(root)).toBe(false);
});