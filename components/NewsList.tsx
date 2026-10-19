import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../types";
import { formatNewsDate, NewsItem } from "../data/news";

export default function NewsList({ items, lang, compact = false }: {
  items: NewsItem[];
  lang: Language;
  compact?: boolean;
}) {
  return (
    <div className={`news-list${compact ? " news-list-compact" : ""}`}>
      {items.map(item => (
        <article className="news-entry" key={item.id} id={item.id}>
          <time dateTime={item.date}>{formatNewsDate(item.date, lang)}</time>
          <div>
            <h3>{item.title[lang]}</h3>
            {!compact && <p>{item.description[lang]}</p>}
            {item.href.startsWith("/") && !item.href.endsWith(".pdf") ? (
            <Link className="news-material-link" to={item.href}>
              {item.linkLabel[lang]} <span aria-hidden="true">→</span>
            </Link>
            ) : (
            <a className="news-material-link" href={item.href} target="_blank" rel="noreferrer">
              {item.linkLabel[lang]} <span aria-hidden="true">↗</span>
            </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
