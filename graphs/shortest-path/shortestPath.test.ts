import { describe, it, expect } from "vitest";
import { shortestPath } from "./shortestPath";
import { GNodeStr, GraphStr } from "../common/graph";

describe("shortestPath", function () {
  it("should return shortest path from source to end nodes", function () {
    let graph = new GraphStr();

    let r = new GNodeStr("R");
    let i = new GNodeStr("I");
    let t = new GNodeStr("T");
    let h = new GNodeStr("H");
    let m = new GNodeStr("M");
    let x = new GNodeStr("x");

    graph.addNodes([r, i, t, h, m]);

    //   /-------\
    //  I -- R -- T
    //       |   /
    //  M -- H -/

    graph.addEdge(r, t);
    graph.addEdge(r, h);
    graph.addEdge(r, i);
    graph.addEdge(i, t);
    graph.addEdge(t, h);
    graph.addEdge(h, m);

    expect(shortestPath(r, m)).toEqual([r, h, m]);
    expect(shortestPath(t, r)).toEqual([t, r]);
    expect(shortestPath(t, m)).toEqual([t, h, m]);
    expect(shortestPath(t, x)).toBe(null);
  });
});