import { test } from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

test('sum should return correct result when both inputs are positive numbers', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('sum should return 0 when at least one input is not a number', () => {
  assert.strictEqual(sum(1, '2'), 0);
  assert.strictEqual(sum('1', 2), 0);
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, 2), 0);
  assert.strictEqual(sum(undefined, 2), 0);
  assert.strictEqual(sum({}, 2), 0);
  assert.strictEqual(sum([], 2), 0);
});

test('sum should return 0 when at least one input is negative', () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
  assert.strictEqual(sum(-1, -2), 0);
  assert.strictEqual(sum(-0, -5), 0);
});