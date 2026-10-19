import React from "react";
import { Link } from "react-router-dom";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import { researchStories } from "../data/researchStories";

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
            <div>
              <p className="research-category">
                0{i + 1} / {pub.tags[0]}
              </p>
              <h3><Link to={`/research#${pub.id}`}>{researchStories[pub.id].question[lang]}</Link></h3>
              <p className="research-paper-title">{pub.title}</p>
              <p className="research-author-line">{pub.authors.join(", ")}</p>
              <p className="research-venue">
                {pub.venue}, {pub.year}
              </p>
              <p className="research-summary-text">{researchStories[pub.id].contribution[lang]}</p>
              <div className="research-row-links">
                <Link to={`/research#${pub.id}`}>
                  {en ? "Read the research story" : "了解研究与图表"} ↗
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
      <p className="academic-podcast-note">
        {en ? "Outside research, I co-host a Chinese conversation podcast. " : "研究之外，我也和朋友共同主持一档中文闲聊播客。"}
        <a href="https://podcast.chaoanli.com/">{en ? "Listen to the podcast" : "收听播客"} ↗</a>
      </p>
      <p className="academic-software-note">
        {en ? "Software: " : "软件："}
        <Link to="/projects">EasyGrader / AutoGrade Studio · BSMoption ↗</Link>
      </p>
    </div>
  );
}
