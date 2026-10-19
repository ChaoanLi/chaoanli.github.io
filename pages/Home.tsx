import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import { researchImages } from "../components/ResearchFigure";

const summaries: Record<string, { en: string; zh: string }> = {
  validation: {
    en: "Global and subdomain hypothesis tests for discrepancies between physical observations and computer models. The shear-layer study shows where a simulator departs from the data.",
    zh: "对物理过程与计算机模型之间的差异进行整体及子域检验。剪切层案例展示了模型偏差的位置。",
  },
  calibration: {
    en: "A Hilbert-space formulation of calibration targets and uncertainty quantification. The cardiac ion-channel study shows how the choice of norm changes fitted parameters.",
    zh: "用 Hilbert 空间统一校准目标与不确定性量化。心脏离子通道案例展示范数选择如何改变参数估计。",
  },
  fourier: {
    en: "Continuous representatives, pointwise Fourier estimates, and Hardy–Littlewood inequalities for anisotropic Hardy spaces. Explore the spatial and frequency geometry behind the dilation.",
    zh: "各向异性 Hardy 空间中 Fourier 变换的连续代表、逐点估计与 Hardy–Littlewood 不等式。图中可探索空间与频域的伸缩几何。",
  },
  campanato: {
    en: "Hardy–Campanato duality, Littlewood–Paley and Carleson measure characterizations. Explore how local polynomial subtraction isolates oscillation on anisotropic balls.",
    zh: "Hardy–Campanato 对偶关系、Littlewood–Paley 与 Carleson 测度刻画。图中可探索各向异性球上的多项式相减与局部振荡。",
  },
};

export default function Home({ lang }: { lang: Language }) {
  const en = lang === "en";
  return (
    <div className="site-wrap academic-home">
      <section className="academic-intro">
        <div>
          <p className="eyebrow">TEXAS A&M UNIVERSITY</p>
          <h1>
            Chaoan Li <span>李朝安</span>
          </h1>
          <p className="academic-role">
            {en
              ? "Ph.D. student · Industrial Engineering · Data Science"
              : "工业工程博士生 · 数据科学方向"}
          </p>
          <p className="academic-bio">{SITE_DATA.profile.bio[lang]}</p>
          <p className="academic-secondary">
            {en
              ? "I also work on statistical questions in LLM watermarking and build software for research and teaching."
              : "此外，我也研究 LLM 水印中的统计问题，并开发服务于研究与教学的软件。"}
          </p>
          <div className="academic-links">
            <a href="/Chaoan_Li_Resume.pdf" target="_blank" rel="noreferrer">
              {en ? "Résumé (PDF)" : "简历（PDF）"} ↗
            </a>
            <a href={`mailto:${SITE_DATA.profile.email}`}>Email ↗</a>
            <a
              href={SITE_DATA.profile.googleScholar}
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar ↗
            </a>
            <a href={SITE_DATA.profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
      <section className="academic-research" aria-labelledby="research-title">
        <div className="academic-section-heading">
          <h2 id="research-title">{en ? "Research" : "研究"}</h2>
          <Link to="/research">
            {en ? "Figures & paper details" : "图表与论文详情"} ↗
          </Link>
        </div>
        <p className="academic-section-note">
          {en
            ? "Computer model validation & calibration; harmonic analysis."
            : "计算机模型验证与校准；调和分析。"}
        </p>
        {SITE_DATA.publications.map((pub, i) => (
          <article className="research-summary" key={pub.id}>
            <Link
              to={`/research#${pub.id}`}
              className="research-thumbnail"
              aria-label={
                en ? `Explore ${pub.title}` : `查看研究：${pub.title}`
              }
            >
              <img
                src={researchImages[pub.id]}
                alt={
                  en
                    ? `Research figure: ${pub.tags[0]}`
                    : `研究图：${pub.tags[0]}`
                }
                loading="lazy"
                width="480"
                height="280"
              />
            </Link>
            <div>
              <p className="research-category">
                0{i + 1} / {pub.tags[0]}
              </p>
              <h3>{pub.title}</h3>
              <p className="research-author-line">{pub.authors.join(", ")}</p>
              <p className="research-venue">
                {pub.venue}, {pub.year}
              </p>
              <p className="research-summary-text">{summaries[pub.id][lang]}</p>
              <div className="research-row-links">
                <Link to={`/research#${pub.id}`}>
                  {en ? "Explore figures" : "探索图表"} ↗
                </Link>
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noreferrer">
                    {en ? "Paper" : "论文"} ↗
                  </a>
                )}
                {pub.id === "calibration" && (
                  <span>{en ? "Manuscript under review" : "论文在审"}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="academic-events">
        <div className="academic-section-heading">
          <h2>{en ? "Talks & posters" : "报告与海报"}</h2>
        </div>
        <div className="academic-event">
          <span>2026</span>
          <div>
            <h3>
              CRSE Workshop · The Wharton School, University of Pennsylvania
            </h3>
            <p>
              {en
                ? "Selected oral presenter · Philadelphia"
                : "入选口头报告 · 费城"}
            </p>
          </div>
        </div>
      </section>
      <p className="academic-software-note">
        {en ? "Software: " : "软件："}
        <Link to="/projects">EasyGrader / AutoGrade Studio · BSMoption ↗</Link>
      </p>
    </div>
  );
}
