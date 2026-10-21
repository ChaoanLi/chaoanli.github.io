import { copyFileSync } from 'node:fs';
for (const file of ['validation-pvalues.csv', 'validation-observations.csv', 'validation-simulator.csv']) {
  copyFileSync(new URL(`../data/${file}`, import.meta.url), new URL(`../public/research/data/${file}`, import.meta.url));
}
