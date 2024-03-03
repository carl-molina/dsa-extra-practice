import { expect, it } from "vitest";
import { BNodeNum } from "../common/bintree";
import { lca } from "./lowestCommonAnc";


it("passes_example_tree", function () {
  const root = new BNodeNum(3);

  /* build left subtree */

  const left = new BNodeNum(5);
  root.lnode = left;

  const left_left = new BNodeNum(6);
  left.lnode = left_left;

  const left_right = new BNodeNum(2);
  left.rnode = left_right;

  const left_right_left = new BNodeNum(7);
  left_right.lnode = left_right_left;

  const left_right_right = new BNodeNum(4);
  left_right.rnode = left_right_right;

  /* build right subtree */

  const right = new BNodeNum(1);
  root.rnode = right;

  const right_left = new BNodeNum(0);
  right.lnode = right_left;

  const right_right = new BNodeNum(8);
  right.rnode = right_right;

  /* test examples */

  // root = 3, p = 5, q = 1
  expect(lca(root, left, right)).toBe(root);
  // --> root (3)

  // root = 3, p = 2, q = 7
  expect(lca(root, left_right, left_right_left)).toBe(left_right);
  // --> left_right (2)

  // root = 3, p = 7, q = 6
  expect(lca(root, left_right_left, left_left)).toBe(left);
  // --> left (5)

  // root = 3, p = 8, q = 0
  expect(lca(root, right_left, right_right)).toBe(right);
  // --> right (1)
});