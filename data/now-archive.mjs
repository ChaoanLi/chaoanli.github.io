// Both the UI and the static build use the same archive selection.
export function organizeNowEntries(entries) {
  const dates = new Set();
  for (const entry of entries) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date) ||
        new Date(`${entry.date}T12:00:00Z`).toISOString().slice(0, 10) !== entry.date) {
      throw new Error(`Invalid now entry date: ${entry.date}`);
    }
    if (dates.has(entry.date)) throw new Error(`Duplicate now entry date: ${entry.date}`);
    dates.add(entry.date);
  }
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  return { latest: sorted[0], archived: sorted.slice(1), entries: sorted };
}
