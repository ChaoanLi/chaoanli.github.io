import React, { useEffect } from "react";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import ResearchFigure from "../components/ResearchFigure";
import { researchStories } from "../data/researchStories";
import { researchOrder, researchOverview } from "../data/researchOverview";
import ResearchExplorer from "../components/ResearchExplorer";
import ValidationEvidence from "../components/ValidationEvidence";
import "../research-explainers.css";

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
      <header className="academic-page-intro research-intro">
        <p className="eyebrow">{en ? "RESEARCH / EXPLAINED" : "研究 / 从问题开始"}</p>
        <h1>{en ? "What can we learn from a model’s statistical traces?" : "从统计痕迹中，读懂模型"}</h1>
        <p>{en
          ? "I develop statistical methods to assess model discrepancies, define calibration targets, and study signals left by AI text watermarks. My earlier work is in harmonic analysis."
          : "我研究如何从数据中发现模型偏差、定义合适的校准目标，以及理解 AI 文本水印留下的统计痕迹。此前，我研究调和分析。"}</p>
        <div className="research-reading-route"><span>{en ? "Start with a question" : "从一个问题开始"}</span><span aria-hidden="true">→</span><span>{en ? "Try an example" : "动手理解"}</span><span aria-hidden="true">→</span><span>{en ? "Explore the evidence" : "深入证据与方法"}</span></div>
      </header>
      <div className="research-overview-heading">
        <h2>{en ? "Five ways into my research" : "五项研究，五个入口"}</h2>
        <p>{en ? "Newest to oldest · no specialist background needed to start" : "按研究开展时间，从新到旧 · 无需专业背景也能开始"}</p>
      </div>
      <nav className="research-overview" aria-label={en ? "Research topics, newest first" : "研究主题，从新到旧"}>
        {researchOrder.map((id, index) => <a key={id} href={`#${id}`}>
          <span className="overview-number">0{index + 1}</span>
          <strong>{researchOverview[id].name[lang]}</strong>
          <span>{researchStories[id].question[lang]}</span>
          <span className="overview-open">{en ? "Explore" : "了解这项工作"} ↓</span>
        </a>)}
      </nav>
      <a className="research-talks-link" href="#talks">{en ? "Talks & posters" : "报告与海报"} ↓</a>
      {researchOrder.map((id, index) => {
        const pub = SITE_DATA.publications.find(item => item.id === id)!;
        const story = researchStories[id];
        const overview = researchOverview[id];
        return <article className="research-study explained-study" id={id} key={id}>
          <header>
            <p className="research-category">0{index + 1} / {overview.name[lang]} · {id === "watermark" ? en ? "Ongoing research" : "进行中" : pub.year}</p>
            <h2>{story.question[lang]}</h2>
          </header>
          <p className="study-description">{story.answer[lang]}</p>
          <p className="study-why">{overview.why[lang]}</p>
          <div className="research-keywords" aria-label={en ? "Keywords explained" : "关键词解释"}>
            {overview.keywords.map(keyword => <details key={keyword.term.en}>
              <summary>{keyword.term[lang]} <span aria-hidden="true">＋</span></summary>
              <p>{keyword.meaning[lang]}</p>
            </details>)}
          </div>
          <div className="study-contribution">
            <h3>{en ? "What this work contributes" : "这项研究的贡献"}</h3>
            <p>{story.contribution[lang]}</p>
          </div>
          {["watermark", "calibration", "validation"].includes(id)
            ? <ResearchExplorer kind={id} lang={lang} />
            : <ResearchFigure kind={id} lang={lang} />}
          {id === "validation" && <ValidationEvidence lang={lang} />}
          {id === "calibration" && <details className="study-evidence">
            <summary>{en ? "02 / Real case: cardiac sodium-channel calibration" : "02 / 真实案例：心脏钠离子通道校准"}</summary>
            <p>{en ? "The same 19 observations, with fits and parameter intervals under different calibration targets. These are saved research outputs, separate from the teaching example above." : "同样的 19 个观测，在不同校准目标下比较拟合曲线与参数区间。这里使用保存的研究结果，与上方教学示例分开。"}</p>
            <ResearchFigure kind={id} lang={lang} />
          </details>}
          {id === "watermark" && <p className="study-status">{en ? "Ongoing work. This page introduces the research question and counting mechanism; empirical results will be added with a public research release." : "研究进行中。本页介绍研究问题与计数机制；实验结果将随公开研究材料一同更新。"}</p>}
          <div className="study-capabilities"><h3>{en ? "Skills behind the work" : "这项工作体现的能力"}</h3><p>{overview.skills[lang]}</p></div>
          <details className="study-technical">
            <summary>{en ? "Go deeper: paper, methods & scope" : "继续深入：论文、方法与适用范围"}</summary>
            <p className="study-paper-title">{pub.title}</p>
            {pub.authors.length > 0 && <p className="research-author-line">{pub.authors.join(" · ")}</p>}
            <p className="research-venue">{id === "watermark" ? en ? "Ongoing research" : "研究进行中" : `${pub.venue}, ${pub.year}`}</p>
            <p>{pub.abstract[lang]}</p>
            <div className="research-row-links">
              {pub.link && <a href={pub.link} target="_blank" rel="noreferrer">{en ? "Paper / publication" : "论文／发表页"} ↗</a>}
              {id === "fourier" && <a href="https://arxiv.org/abs/2306.05840" target="_blank" rel="noreferrer">{en ? "Open preprint" : "开放预印本"} ↗</a>}
              {id === "campanato" && <a href="https://arxiv.org/abs/2304.12120" target="_blank" rel="noreferrer">{en ? "Open preprint" : "开放预印本"} ↗</a>}
              {id === "calibration" && <span>{en ? "Manuscript under review" : "论文在审"}</span>}
            </div>
          </details>
          <a className="study-back" href="#main-content">{en ? "Back to research overview" : "返回研究总览"} ↑</a>
        </article>;
      })}
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
            <h3>INFORMS · {en ? "Poster competition" : "海报比赛"}</h3>
            <p>{en ? "Poster presentation" : "海报展示"}</p>
            <p className="academic-talk-title">Statistical Validation for Digital Twins: Global and Subdomain Hypothesis Testing</p>
            <div className="research-row-links">
              <a href="/presentations/texas-digital-twin-2026-poster.pdf" target="_blank" rel="noreferrer">{en ? "View poster (PDF)" : "查看海报（PDF）"} ↗</a>
            </div>
          </div>
          <a className="presentation-preview" href="/presentations/texas-digital-twin-2026-poster.pdf" target="_blank" rel="noreferrer" aria-label={en ? "Open research poster PDF" : "打开研究海报 PDF"}>
            <img src="/presentations/texas-digital-twin-2026-preview.png" alt={en ? "Research poster on global and subdomain validation of digital twins" : "数字孪生全局与子域统计验证研究海报"} width="1400" height="1260" loading="lazy" />
          </a>
        </div>
      </section>
    </div>
  );
}
