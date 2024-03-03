import { test, expect } from "vitest";
import { sortSorted } from "./sortSorted";
import { LLStr } from "../common/ll";

test("works", function () {
  const a = new LLStr(["a", "b", "d", "g"]);
  const b = new LLStr(["c", "d", "e", "f"]);
  expect(sortSorted(a, b).toArray()).toEqual(
      ["a", "b", "c", "d", "d", "e", "f", "g"]);
});