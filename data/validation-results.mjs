export function parseValidationResults(csv) {
  const [header, ...lines] = csv.trim().split(/\r?\n/).map(row => row.split(','));
  return lines.map(cells => Object.fromEntries(header.map((key, i) => [key,
    key === 'test' ? cells[i] : key === 'reject' ? cells[i] === 'True' : cells[i] === '' ? null : Number(cells[i])])));
}
