import React from "react";
import { Language } from "../types";
import { news } from "../data/news";
import NewsList from "../components/NewsList";

export default function NewsPage({ lang }: { lang: Language }) {
  const years = [...new Set(news.map(item => item.date.slice(0, 4)))];
  return (
    <div className="site-wrap news-page">
      <header className="academic-page-intro">
        <h1>{lang === "en" ? "News" : "动态"}</h1>
        <p>{lang === "en" ? "Updates from my research, talks and projects." : "关于研究、报告与项目的近况。"}</p>
      </header>
      {years.map(year => (
        <section key={year} aria-labelledby={`news-${year}`}>
          <h2 className="news-year" id={`news-${year}`}>{year}</h2>
          <NewsList items={news.filter(item => item.date.startsWith(year))} lang={lang} />
        </section>
      ))}
    </div>
  );
}
