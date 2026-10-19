import React, { useEffect } from "react";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import ResearchFigure from "../components/ResearchFigure";
import { researchStories } from "../data/researchStories";

export default function ResearchPage({ lang }: { lang: Language }) {
  const en = lang === "en";
  // The research route loads on demand, after App's initial hash effect.
  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    let cancelled = false;
    // Offscreen lazy previews cannot decode until scrolling brings them into view.
    Promise.all(Array.from(document.querySelectorAll<HTMLImageElement>('.research-detail-page img:not([loading="lazy"])'))
      .map(image => image.decode().catch(() => undefined)))
      .then(() => { if (!cancelled) target.scrollIntoView(); });
    return () => { cancelled = true; };
  }, []);
  return (
    <div className="site-wrap research-detail-page">
      <header className="academic-page-intro">
        <p className="eyebrow">RESEARCH</p>
        <h1>
          {en
            ? "Model validation, calibration & harmonic analysis"
            : "模型验证、校准与调和分析"}
        </h1>
        <p>
          {en
            ? "Two current statistical projects and two published papers in pure mathematics. Each figure below is tied to a case study or a stated mathematical construction."
            : "两项当前统计研究与两篇已发表的纯数学论文。以下图表分别对应案例结果或明确的数学构造。"}
        </p>
      </header>
      <nav
        className="research-jump"
        aria-label={en ? "Research topics" : "研究主题"}
      >
        {[
          ["validation", "Validation", "模型验证"],
          ["calibration", "Calibration", "模型校准"],
          ["fourier", "Fourier analysis", "Fourier 分析"],
          ["campanato", "Campanato spaces", "Campanato 空间"],
          ["talks", "Talks & posters", "报告与海报"],
        ].map(([id, a, b]) => (
          <a key={id} href={`#${id}`}>
            {en ? a : b} ↓
          </a>
        ))}
      </nav>
      {SITE_DATA.publications.map((pub) => (
        <article className="research-study" id={pub.id} key={pub.id}>
          <header>
            <p className="research-category">
              {pub.tags[0]}
            </p>
            <h2>{researchStories[pub.id].question[lang]}</h2>
            <p className="study-paper-title">{pub.title}</p>
            <p className="research-author-line">{pub.authors.join(" · ")}</p>
            <p className="research-venue">
              {pub.venue}, {pub.year}
            </p>
          </header>
          <p className="study-description">{researchStories[pub.id].answer[lang]}</p>
          <div className="study-contribution">
            <h3>{en ? "What this work contributes" : "这项研究的贡献"}</h3>
            <p>{researchStories[pub.id].contribution[lang]}</p>
          </div>
          <ResearchFigure kind={pub.id} lang={lang} />
          <details className="study-technical">
            <summary>{en ? "Technical summary & scope" : "技术摘要与适用范围"}</summary>
            <p>{pub.abstract[lang]}</p>
          </details>
          <div className="research-row-links">
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noreferrer">
                {en ? "Paper / publication" : "论文／发表页"} ↗
              </a>
            )}
            {pub.id === "fourier" && (
              <a href="https://arxiv.org/abs/2306.05840">
                {en ? "Open preprint" : "开放预印本"} ↗
              </a>
            )}
            {pub.id === "campanato" && (
              <a href="https://arxiv.org/abs/2304.12120">
                {en ? "Open preprint" : "开放预印本"} ↗
              </a>
            )}
            {pub.id === "calibration" && (
              <span>{en ? "Manuscript under review" : "论文在审"}</span>
            )}
          </div>
        </article>
      ))}
      <section className="academic-events" id="talks" aria-labelledby="talks-title">
        <div className="academic-section-heading">
          <h2 id="talks-title">{en ? "Talks & posters" : "报告与海报"}</h2>
        </div>
        <div className="academic-event" id="talk-crse-2026">
          <time dateTime="2026-08-11">{en ? "Aug 11, 2026" : "2026年8月11日"}</time>
          <div>
            <h3>
              CRSE Workshop · The Wharton School, University of Pennsylvania
            </h3>
            <p>
              {en
                ? "Selected oral presenter · Philadelphia · Workshop: August 11–13, 2026"
                : "入选口头报告 · 费城 · Workshop：2026年8月11–13日"}
            </p>
            <p className="academic-talk-title">Statistical Validation of Computer Models via Frequency-Domain Methods</p>
            <div className="research-row-links">
              <a href="/presentations/crse-2026-slides.pdf" target="_blank" rel="noreferrer">{en ? "View slides (PDF · 16 pages)" : "查看幻灯片（PDF · 16页）"} ↗</a>
            </div>
          </div>
          <a className="presentation-preview" href="/presentations/crse-2026-slides.pdf" target="_blank" rel="noreferrer" aria-label={en ? "Open CRSE Workshop slides PDF" : "打开 CRSE Workshop 幻灯片 PDF"}>
            <img src="/presentations/crse-2026-preview.png" alt={en ? "Title slide of the CRSE Workshop presentation" : "CRSE Workshop 报告封面"} width="1400" height="788" loading="lazy" />
          </a>
        </div>
        <div className="academic-event" id="poster-digital-twin-2026">
          <time dateTime="2026-04-17">{en ? "Apr 17, 2026" : "2026年4月17日"}</time>
          <div>
            <h3>Texas Digital Twin Symposium · Texas A&M University</h3>
            <p>{en ? "Poster presentation · College Station, TX" : "海报展示 · 得克萨斯州大学城"}</p>
            <p className="academic-talk-title">Statistical Validation for Digital Twins: Global and Subdomain Hypothesis Testing</p>
            <div className="research-row-links">
              <a href="/presentations/texas-digital-twin-2026-poster.pdf" target="_blank" rel="noreferrer">{en ? "View poster (PDF)" : "查看海报（PDF）"} ↗</a>
            </div>
          </div>
          <a className="presentation-preview" href="/presentations/texas-digital-twin-2026-poster.pdf" target="_blank" rel="noreferrer" aria-label={en ? "Open Texas Digital Twin Symposium poster PDF" : "打开 Texas Digital Twin Symposium 海报 PDF"}>
            <img src="/presentations/texas-digital-twin-2026-preview.png" alt={en ? "Research poster on global and subdomain validation of digital twins" : "数字孪生全局与子域统计验证研究海报"} width="1400" height="1260" loading="lazy" />
          </a>
        </div>
      </section>
    </div>
  );
}
