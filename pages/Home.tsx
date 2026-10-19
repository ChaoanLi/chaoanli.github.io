import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import { now, formatNowDate } from "../data/now";

export default function Home({ lang }: { lang: Language }) {
  const en = lang === "en";
  return (
    <div className="site-wrap academic-home">
      <section className="academic-intro">
        <div>
          <p className="eyebrow">Texas A&M University</p>
          <h1>
            Chaoan Li <span>李朝安</span>
          </h1>
          <p className="academic-role">
            {en
              ? "Ph.D. student · Industrial Engineering · Data Science"
              : "工业工程博士生 · 数据科学方向"}
          </p>
          <p className="academic-bio">
            {en
              ? "I study statistical validation and calibration of computer models, advised by Rui Tuo. My background is in harmonic analysis."
              : "我的导师是 Rui Tuo。目前研究计算机模型的统计验证与校准，此前做过调和分析。"}
          </p>
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
        <aside className="academic-portrait">
          <img src={SITE_DATA.profile.avatarUrl} alt={en ? "Portrait of Chaoan Li" : "李朝安的头像"} width="240" height="240" fetchPriority="high" />
        </aside>
      </section>
      {now.latest && (
        <section className="home-now" aria-labelledby="home-now-title">
          <div className="academic-section-heading">
            <h2 id="home-now-title">nownownow</h2>
            <Link to="/now">{en ? "Read more" : "读近况"} →</Link>
          </div>
          <time dateTime={now.latest.date}>{formatNowDate(now.latest.date, lang)}</time>
          <p>{now.latest.excerpt[lang]}</p>
        </section>
      )}
    </div>
  );
}
