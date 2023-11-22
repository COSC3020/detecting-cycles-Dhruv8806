const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js').toString());

const graph1 = [
  [1, 2],
  [3],
  [4],
  [5],
  [2, 6],
  [7],
  [0],
  []
];
const expected1 = true;
assert(hasCycle(graph1) == expected1);

const graph2 = [
  [1, 2],
  [0, 2],
  [0, 1]
];
const expected2 = true;
assert(hasCycle(graph2) == expected2);

const graph3 = [
  [1, 2],
  [3],
  [0],
  []
];
const expected3 = false;
assert(hasCycle(graph3) == expected3);

const graph4 = [
  [1, 2],
  [0, 3],
  [0, 4],
  [1],
  [2]
];
const expected4 = false;
assert(hasCycle(graph4) == expected4);

const graph5 = [
  [1, 2],
  [3, 4],
  [],
  [5],
  [],
  [3]
];
const expected5 = false;
assert(hasCycle(graph5) == expected5);

const graph6 = [
  [1, 2],
  [3, 4],
  [5],
  [0],
  [],
  [2]
];
const expected6 = true;
assert(hasCycle(graph6) == expected6);


// Test cases are inspired from "JamesOzzyburn" implementation 



