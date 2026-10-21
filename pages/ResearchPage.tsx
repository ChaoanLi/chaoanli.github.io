import React, { useEffect } from "react";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import ResearchFigure from "../components/ResearchFigure";
import { researchStories } from "../data/researchStories";
import { researchOrder, researchOverview } from "../data/researchOverview";
import { researchSummaries } from "../data/researchSummaries";
import { Link } from "react-router-dom";
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
        <p className="eyebrow">{en ? "Research" : "研究"}</p>
        <h1>{en ? <><span>Model reliability</span> &amp; <span>AI text privacy</span></> : <><span>模型可靠性</span>与 <span>AI 文本隐私</span></>}</h1>
        <p>{en
          ? "I’m a Ph.D. student at Texas A&M University. I develop statistical methods to find where simulators disagree with measurements, estimate their parameters, and assess privacy risks in LLM text watermarks. My work combines mathematical analysis, Python implementation and experimental evaluation."
          : "我是德州农工大学博士生，研究如何发现仿真模型偏差、估计模型参数，以及评估 LLM 文本水印的隐私风险。我的工作结合数学分析、Python 实现与实验验证。"}</p>
        <p className="research-ownership">{en
          ? "For the three current projects, my advisor proposed the research directions; I lead the method development, theoretical analysis, implementation and experiments."
          : "以下三项当前研究由导师提出研究思路，我主要负责方法发展、理论分析、代码实现与实验验证。"}</p>
        <ul className="research-track-record">
          <li><a href="#fourier">{en ? "2 first-author mathematics papers published" : "2 篇第一作者数学论文已发表"}</a></li>
          <li>{en ? "2 statistical-methodology manuscripts under review: " : "2 篇统计方法论文在审："}<a href="#calibration">{en ? "calibration" : "模型校准"}</a>{en ? " and " : "、"}<a href="#validation">{en ? "validation" : "模型验证"}</a></li>
          <li><a href="#talk-crse-2026">{en ? "Selected oral presenter · CRSE Workshop, Wharton · 2026" : "入选口头报告 · 沃顿商学院 CRSE Workshop · 2026"}</a></li>
        </ul>
        <div className="research-contact-links">
          <Link to="/resume">{en ? "Résumé" : "简历"} →</Link>
          <Link to="/projects">{en ? "Software I build" : "我开发的软件"} →</Link>
          <a href={`mailto:${SITE_DATA.profile.email}`}>{en ? "Contact" : "联系我"} ↗</a>
        </div>
      </header>
      <nav className="research-overview" aria-label={en ? "Research topics, newest first" : "研究主题，从新到旧"}>
        {researchOrder.map((id, index) => <a key={id} href={`#${id}`}>
          <span className="overview-number">0{index + 1}</span>
          <strong>{researchOverview[id].name[lang]}</strong>
          <span>{researchSummaries[id][lang]}</span>
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
          {id === "validation" && <ValidationEvidence lang={lang} />}
          {id === "calibration" && <details className="study-evidence">
            <summary>{en ? "02 / Real case: cardiac sodium-channel calibration" : "02 / 真实案例：心脏钠离子通道校准"}</summary>
            <p>{en ? "The same 19 observations, with fits and parameter intervals under different calibration targets. These are saved research outputs, separate from the teaching example above." : "同样的 19 个观测，在不同校准目标下比较拟合曲线与参数区间。这里使用保存的研究结果，与上方教学示例分开。"}</p>
            <ResearchFigure kind={id} lang={lang} />
          </details>}
          {id === "watermark" && <p className="study-status">{en ? "Current work: a keyless, reference-based test of shared watermark keys. Empirical results are not yet public." : "当前工作：构建无密钥、基于参考集合的共享水印密钥检验。实验结果尚未公开。"}</p>}
          {["watermark", "calibration", "validation"].includes(id)
            ? <details className="study-demo"><summary>{en ? "Interactive illustration" : "交互示例"}</summary><ResearchExplorer kind={id} lang={lang} /></details>
            : <ResearchFigure kind={id} lang={lang} />}
          <div className="study-capabilities"><h3>{["watermark", "calibration", "validation"].includes(id) ? en ? "My contribution" : "我主要负责的工作" : en ? "Methods behind the work" : "研究方法"}</h3><p>{overview.skills[lang]}</p></div>
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
