import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import ProjectFeature from "../components/ProjectFeature";
export default function ProjectsPage({ lang }: { lang: Language }) {
  const en = lang === "en";
  const research = SITE_DATA.projects.filter(
    (p) => p.category === "Research" && p.status !== "archived",
  );
  return (
    <div className="site-wrap projects-page">
      <header className="page-intro">
        <p className="eyebrow">SELECTED WORK / {en ? "PROJECTS" : "作品"}</p>
        <h1>
          {en ? (
            <>
              From a question
              <br />
              to <em>something useful.</em>
            </>
          ) : (
            <>
              从一个问题，
              <br />
              到一件<em>有用的作品。</em>
            </>
          )}
        </h1>
        <p>
          {en
            ? "Tools, experiments, and research code. A few things I’ve been building."
            : "一些正在打磨的工具、实验，以及研究中写下的代码。"}
        </p>
      </header>
      <div className="featured-grid">
        <ProjectFeature kind="options" lang={lang} />
        <ProjectFeature kind="grader" lang={lang} />
      </div>
      <section className="project-archive">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE RESEARCH SHELF</p>
            <h2>{en ? "Code behind the questions." : "问题背后的代码。"}</h2>
          </div>
        </div>
        {research.map((p, i) => (
          <article className="archive-row" key={p.id}>
            <span className="archive-index">0{i + 1}</span>
            <div>
              <h3>{p.title[lang]}</h3>
              <p>{p.description[lang]}</p>
              <span className="archive-tech">{p.tech?.join(" / ")}</span>
            </div>
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.title.en} on GitHub`}
            >
              <ArrowUpRight size={22} />
            </a>
          </article>
        ))}
      </section>
      <a
        className="all-github"
        href="https://github.com/ChaoanLi"
        target="_blank"
        rel="noreferrer"
      >
        {en ? "Browse my public work on GitHub" : "在 GitHub 浏览我的公开项目"}{" "}
        <ArrowUpRight size={19} />
      </a>
    </div>
  );
}
