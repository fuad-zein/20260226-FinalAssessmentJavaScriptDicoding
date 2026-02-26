import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('fungsi sum harus mengembalikan hasil yang benar untuk bilangan positif', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 20), 30);
});

test('fungsi sum harus mengembalikan hasil yang benar untuk bilangan negatif', () => {
  assert.strictEqual(sum(-1, -2), -3);
  assert.strictEqual(sum(-5, 3), -2);
});

test('fungsi sum harus mengembalikan hasil yang benar untuk nilai nol', () => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('fungsi sum harus mengembalikan hasil yang benar untuk bilangan floating point', () => {
  assert.strictEqual(sum(1.5, 2.5), 4.0);
  const result = sum(0.1, 0.2);
  assert.ok(Math.abs(result - 0.3) < 0.0001);
});