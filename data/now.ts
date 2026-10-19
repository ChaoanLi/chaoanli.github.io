import rawEntries from "./now.json";
import { organizeNowEntries } from "./now-archive.mjs";
import type { Language } from "../types";

export interface NowEntry {
  date: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  paragraphs: Record<Language, string[]>;
}

export const now = organizeNowEntries(rawEntries as NowEntry[]);

export function formatNowDate(date: string, lang: Language) {
  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
