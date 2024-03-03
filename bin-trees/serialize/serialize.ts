import { BinTreeNum, BNodeNum } from "../common/bintree";
import { QueueStr } from "../../bsts/common/queue";

/** Serializes binary tree in a DFS fashion:
 *
 *     1          => "1 2 # # 3 4 # # #"
 *    / \                 a b     c d e
 *   2   3
 *      /      a,b = L,R children of 2
 *     4       c,d = L,R children of 4
 *             e = R child of 3
 */


function serialize(tree: BinTreeNum): string {
  return "x";
}


/** Deserializes binary tree in a DFS fashion:
 *
 *     1          <= "1 2 # # 3 4 # # #"
 *    / \                 a b     c d e
 *   2   3
 *      /      a,b = L,R children of 2
 *     4       c,d = L,R children of 4
 *             e = R child of 3
 *
 *  An empty string deserializes to an empty tree.
 */

function deserialize(stringTree: string): BinTreeNum {
  return new BinTreeNum();
}


export { serialize, deserialize };