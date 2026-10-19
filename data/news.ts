import { Language } from "../types";

export interface NewsItem {
  id: string;
  date: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  href: string;
  linkLabel: Record<Language, string>;
}

// ISO dates keep the archive and the homepage in the same chronological order.
export const news: NewsItem[] = [
  {
    id: "crse-2026",
    date: "2026-08-11",
    title: {
      en: "Oral presentation at the CRSE Workshop",
      zh: "在 CRSE Workshop 作口头报告",
    },
    description: {
      en: "I presented Statistical Validation of Computer Models via Frequency-Domain Methods at the Wharton School, University of Pennsylvania. The workshop took place August 11–13 in Philadelphia.",
      zh: "在宾夕法尼亚大学 Wharton School 报告了计算机模型统计验证的频域方法。此次 Workshop 于8月11–13日在费城举行。",
    },
    href: "/presentations/crse-2026-slides.pdf",
    linkLabel: { en: "Presentation slides", zh: "报告幻灯片" },
  },
  {
    id: "digital-twin-2026",
    date: "2026-04-17",
    title: {
      en: "Poster at the Texas Digital Twin Symposium",
      zh: "在 Texas Digital Twin Symposium 展示海报",
    },
    description: {
      en: "I presented Statistical Validation for Digital Twins: Global and Subdomain Hypothesis Testing at Texas A&M University in College Station.",
      zh: "在德州农工大学展示海报 Statistical Validation for Digital Twins: Global and Subdomain Hypothesis Testing，介绍数字孪生的全局与子域统计验证。",
    },
    href: "/presentations/texas-digital-twin-2026-poster.pdf",
    linkLabel: { en: "Research poster", zh: "研究海报" },
  },
].sort((a, b) => b.date.localeCompare(a.date));

export function formatNewsDate(date: string, lang: Language) {
  return new Intl.DateTimeFormat(lang === "en" ? "en-US" : "zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
