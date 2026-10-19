import React from "react";
import { Link, useParams } from "react-router-dom";
import type { Language } from "../types";
import { now, formatNowDate } from "../data/now";

export default function NowPage({ lang }: { lang: Language }) {
  const { date } = useParams();
  const entry = date ? now.entries.find(item => item.date === date) : now.latest;
  const en = lang === "en";
  if (!entry) return (
    <div className="site-wrap now-page">
      <h1>{en ? "Entry not found" : "没有找到这篇记录"}</h1>
      <Link to="/now">{en ? "Back to nownownow" : "回到 nownownow"} →</Link>
    </div>
  );
  return (
    <div className="site-wrap now-page">
      <header className="now-header">
        <h1>nownownow</h1>
        <p>{en ? "What I’ve been doing, and a few thoughts along the way." : "最近做了什么，也留下一些想法。"}</p>
      </header>
      <article className="now-entry">
        <p className="now-date">{en ? "Updated " : "更新于 "}<time dateTime={entry.date}>{formatNowDate(entry.date, lang)}</time></p>
        <h2>{entry.title[lang]}</h2>
        {entry.paragraphs[lang].map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      </article>
      <nav className="now-entry-links" aria-label={en ? "Entry navigation" : "记录导航"}>
        {date ? <Link to="/now">{en ? "Latest entry" : "最新近况"} →</Link> : <Link to={`/now/${entry.date}`}>{en ? "Permalink" : "这篇的固定链接"} ↗</Link>}
        <Link to="/now/archive">{en ? "Archive" : "归档"} →</Link>
      </nav>
    </div>
  );
}

export function NowArchive({ lang }: { lang: Language }) {
  const en = lang === "en";
  return (
    <div className="site-wrap now-page">
      <header className="now-header">
        <h1>{en ? "Archive" : "归档"}</h1>
        <p>{en ? "Earlier nownownow entries." : "以前的 nownownow。"}</p>
      </header>
      {now.archived.length ? (
        <ul className="now-archive-list">
          {now.archived.map(entry => (
            <li key={entry.date}>
              <time dateTime={entry.date}>{formatNowDate(entry.date, lang)}</time>
              <Link to={`/now/${entry.date}`}>{entry.title[lang]} →</Link>
            </li>
          ))}
        </ul>
      ) : <p className="now-empty">{en ? "No earlier entries yet." : "还没有更早的记录。"}</p>}
      <Link className="now-back" to="/now">← {en ? "Back to nownownow" : "回到 nownownow"}</Link>
    </div>
  );
}
