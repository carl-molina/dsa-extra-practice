import { it, expect } from "vitest";
import { BinTreeNum, BNodeNum } from "../common/bintree";
import { serialize, deserialize } from "./serialize";
import { smallTree, largeTree, longTree } from "../common/bintree.test";

//     1          => "1 2 # # 3 4 # # #"
//    / \                 a b     c d e
//   2   3
//      /      a,b = L,R children of 2
//     4       c,d = L,R children of 4
//             e = R child of 3

const btree = new BinTreeNum(
    new BNodeNum(1,
        new BNodeNum(2),
        new BNodeNum(3, new BNodeNum(4))));

it("serializes", function () {
  expect(serialize(btree)).toEqual("1 2 # # 3 4 # # #");
});

it("deserializes", function () {
  const btree = deserialize("1 2 # # 3 4 # # #");
  const root = btree.root!;
  expect(root.val).toBe(1);
  expect(root.lnode!.val).toBe(2);
  expect(root.lnode!.lnode).toBe(null);
  expect(root.lnode!.rnode).toBe(null);
  expect(root.rnode!.val).toBe(3);
  expect(root.rnode!.lnode!.val).toBe(4);
  expect(root.rnode!.rnode).toBe(null);
  expect(root.rnode!.lnode!.lnode).toBe(null);
  expect(root.rnode!.lnode!.rnode).toBe(null);

  expect(serialize(btree)).toEqual("1 2 # # 3 4 # # #");

  const btreeEmpty = deserialize("");
  expect(btreeEmpty.root).toBe(null);
})