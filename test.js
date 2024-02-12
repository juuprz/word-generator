import func from './generateWords.js';
const input1 = "oogd";
const words1 = ["good", "god", "dog", "goo", "do", "go", "hello", "these", "should", "not", "appear", "in", "the", "output"];
const expected1 = ["good", "god", "dog", "goo", "do", "go"];
const res1 = func(input1, words1);
if (res1.length === expected1.length && expected1.reduce(function (acc, cur) {
    return acc && res1.includes(cur);
}, true)) {
    console.log("Test Passed");
}
else {
    console.log("Test Failed");
}
