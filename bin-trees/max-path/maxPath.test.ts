import { it, expect } from "vitest";
 import { BinTreeNum, BNodeNum } from "../common/bintree";
 import { maxPath} from "./maxPath";

//          5       the highest-sum for this would be 11
//        /   \          [2, -1, 5, 3, -4, 6]
//      -1     3
//     / \    /  \
//    1   2  -3  -4
//               /
//              6

const btree = new BinTreeNum(
    new BNodeNum(5,
        new BNodeNum(-1,
            new BNodeNum(1),
            new BNodeNum(2)),
        new BNodeNum(3,
            new BNodeNum(-3),
            new BNodeNum(-4,
                new BNodeNum(6),
            ),
        )));

it("calculates the sum", function () {
  expect(maxPath(btree)).toBe(11);
});
