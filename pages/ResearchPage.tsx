import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
export default function ResearchPage({ lang }: { lang: Language }) {
  const en = lang === "en";
  return (
    <div className="site-wrap research-page">
      <header className="page-intro">
        <p className="eyebrow">
          RESEARCH / {en ? "PUBLICATIONS" : "研究与论文"}
        </p>
        <h1>
          {en ? (
            <>
              Making sense
              <br />
              of <em>models.</em>
            </>
          ) : (
            <>
              认真理解，
              <br />
              <em>模型与世界。</em>
            </>
          )}
        </h1>
        <p>
          {en
            ? "Statistics, machine learning, and the validation of computer models."
            : "统计学、机器学习，以及计算机模型的验证。"}
        </p>
      </header>
      <div className="research-topics">
        {SITE_DATA.profile.researchInterests.map((v, i) => (
          <span key={i}>{v[lang]}</span>
        ))}
      </div>
      <div className="publication-list">
        {SITE_DATA.publications.map((pub) => (
          <article className="publication-entry" key={pub.id}>
            <aside>
              <span>{pub.year}</span>
              <p>{pub.venue}</p>
            </aside>
            <div>
              <h2>{pub.title}</h2>
              <p className="publication-authors">{pub.authors.join(" · ")}</p>
              <p className="publication-abstract">{pub.abstract[lang]}</p>
              <div className="publication-bottom">
                <span>{pub.tags.join(" / ")}</span>
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noreferrer">
                    {en ? "Read the paper" : "阅读论文"}{" "}
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a
        className="all-github"
        href={SITE_DATA.profile.googleScholar}
        target="_blank"
        rel="noreferrer"
      >
        Google Scholar <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
