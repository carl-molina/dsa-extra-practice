import { test, expect } from "vitest";
import { pivotAroundValue } from "./pivotAroundVal";
import { LLStr } from "../common/ll";

test("works", function () {
  // For ll b-e-d-f-a-d-c and pivot of c, should return
  // b-a-e-d-f-d-c
  const ll = new LLStr(["b", "e", "d", "f", "a", "d", "c"]);
  const sortedLL = pivotAroundValue(ll, "c");
  expect(sortedLL.toArray()).toEqual(["b", "a", "e", "d", "f", "d", "c"]);
});
