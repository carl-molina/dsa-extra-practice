import { test, expect } from "vitest";
import { calc } from "./rpnCalc";

test("works for valid", function () {
  calc("1 2 +");                    // 1 + 2 == 3
  calc("1 2 3 * +");                // 1 + (2 * 3) == 6
  calc("1 2 + 3 *");                // (1 + 2) * 3 == 9
  calc("1 2 3 + * 4 2 / - 5 *");   // (1 * (2 + 3) - (4 / 2)) * 5 == 15

  expect(calc("1")).toEqual(1);                        // 1
  expect(calc("1 2 +")).toEqual(3);                    // 1 + 2
  expect(calc("1 2 3 * +")).toEqual(7);                // 1 + (2 + 3)
  expect(calc("1 2 + 3 *")).toEqual(9);                // (1 + 2) * 3
  expect(calc("1 2 3 + * 4 2 / - 5 *")).toEqual(15);   // (1*(2+3)-(4/2))* 5
});

test("throws error for invalid", function () {
  expect(() => calc("1 2")).toThrow(Error);
  expect(() => calc("1 2 ?")).toThrow(Error);
  expect(() => calc("1 2 + +")).toThrow(Error);
});

