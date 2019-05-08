const assert = require("assert");

function foo(val) {
  if (val == true) {
    return "hello world";
  }
  return "something else";
}

const result = foo(true);
console.log(result);

assert.equal(result, "hello world");
