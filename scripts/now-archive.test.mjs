import test from "node:test";
import assert from "node:assert/strict";
import { organizeNowEntries } from "../data/now-archive.mjs";

test("publishing a new entry moves the previous entry into the archive without losing it", () => {
  const previous = { date: "2026-10-19", paragraphs: { zh: ["旧记录原文"] } };
  const next = { date: "2026-10-20", paragraphs: { zh: ["新记录"] } };
  const input = [previous, next];
  const result = organizeNowEntries(input);
  assert.equal(result.latest, next);
  assert.deepEqual(result.archived, [previous]);
  assert.equal(result.entries.find(entry => entry.date === previous.date), previous);
  assert.deepEqual(input, [previous, next]);
});

test("the first entry has no invented archive history", () => {
  const entry = { date: "2026-10-19" };
  assert.deepEqual(organizeNowEntries([entry]).archived, []);
});

test("duplicate dates cannot silently replace a saved entry", () => {
  assert.throws(() => organizeNowEntries([{ date: "2026-10-19" }, { date: "2026-10-19" }]), /Duplicate/);
});

test("invalid calendar dates fail before the static pages are published", () => {
  assert.throws(() => organizeNowEntries([{ date: "2026-02-30" }]), /Invalid/);
});
