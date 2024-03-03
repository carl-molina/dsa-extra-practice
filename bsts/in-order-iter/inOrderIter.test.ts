import { beforeEach, describe, expect, it } from "vitest";
import { BSTNum } from "../common/bst";
import { inOrderIterative } from "./inOrderIter";
import { lgBst, smBst } from "../common/bst.test";

let sm: BSTNum, lg: BSTNum;

beforeEach(function () {
  sm = smBst();
  lg = lgBst();
});

describe("inOrderIterative", function () {
  it("returns values found in-order", function () {
    expect(inOrderIterative(sm.root)).toEqual([10, 20]);
    expect(inOrderIterative(lg.root)).toEqual([10, 15, 25, 40, 50, 75, 100]);
    expect(inOrderIterative(null)).toEqual([]);
  });
});
