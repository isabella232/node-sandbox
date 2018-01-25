'use strict';
const assert = require('assert');
const sandbox = require(`./build/Release/sandbox`);
const child_process = require("child_process");

function tryExec() {
  child_process.exec("true");
}

assert.doesNotThrow(tryExec);

let s = sandbox.activate()
assert.ok(s.success, "Sandbox failed to activate: " + s.message);

// child_process.spawn() throws an exception immediately if it fails.
assert.throws(tryExec, /Error: spawn EACCES/);