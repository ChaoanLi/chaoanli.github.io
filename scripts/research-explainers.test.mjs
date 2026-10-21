import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseValidationResults } from '../data/validation-results.mjs';
import { validationExample, calibrationExample, contextCollisions } from '../data/research-explainers.mjs';

test('a perfect model has zero specified discrepancy in every region', () => {
  const result = validationExample('none');
  assert.ok(result.points.every(p => p.discrepancy === 0));
  assert.deepEqual(result.regions, [0, 0, 0]);
});
test('a local discrepancy is concentrated in the middle region', () => {
  const { regions } = validationExample('local');
  assert.ok(regions[1] > 10 * regions[0] && regions[1] > 10 * regions[2]);
});
test('calibration targets agree with analytic least-squares solutions', () => {
  assert.ok(Math.abs(calibrationExample(0).theta - (1 - 0.9 / (2 * Math.PI))) < 1e-5);
  assert.ok(Math.abs(calibrationExample(1).theta - (1 - 0.225 / (2 * Math.PI))) < 1e-5);
});
test('the optimum minimizes the chosen objective rather than every objective', () => {
  const a = calibrationExample(0), b = calibrationExample(1);
  assert.ok(a.loss(a.theta) < a.loss(b.theta));
  assert.ok(b.loss(b.theta) < b.loss(a.theta));
});
test('collision counting uses first occurrence per context per document', () => {
  const result = contextCollisions(['river meets river flows'], ['river meets water river meets'], 1);
  assert.equal(result.total, 1);
  assert.equal(result.score, 1);
  assert.deepEqual(result.matches, ['river → meets']);
});
test('matching context alone is not a collision and score is averaged over document pairs', () => {
  assert.equal(contextCollisions(['river meets'], ['river flows'], 1).total, 0);
  const result = contextCollisions(['river meets', 'tree shades'], ['river meets'], 1);
  assert.equal(result.total, 1);
  assert.equal(result.score, 0.5);
});
test('the context width changes which continuations can collide', () => {
  assert.equal(contextCollisions(['old river meets'], ['wide river meets'], 1).total, 1);
  assert.equal(contextCollisions(['old river meets'], ['wide river meets'], 2).total, 0);
});

test('published case-study decisions use adjusted p-values for all six regions', () => {
  const csv = readFileSync(new URL('../public/research/data/validation-pvalues.csv', import.meta.url), 'utf8');
  const rows = parseValidationResults(csv);
  const local = rows.filter(row => row.test.startsWith('subdomain'));
  assert.equal(local.length, 6);
  for (const row of local) {
    assert.ok(Math.abs(row.adjusted_p_value - Math.min(1, row.p_value * 6)) < 1e-12);
    assert.equal(row.reject, row.adjusted_p_value <= 0.05);
  }
  assert.deepEqual(local.filter(row => row.reject).map(row => row.test), ['subdomain 2', 'subdomain 3', 'subdomain 4', 'subdomain 5']);
});
