import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mic2 } from "lucide-react";
import { Language } from "../types";
import { SITE_DATA } from "../constants";
import ProjectFeature from "../components/ProjectFeature";

export default function Home({ lang }: { lang: Language }) {
  const en = lang === "en";
  return (
    <>
      <section className="site-wrap home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-dot" />
            {en ? "RESEARCH · CODE · CONVERSATION" : "研究 · 代码 · 对话"}
          </p>
          <h1>
            {en ? "Chaoan Li" : "李朝安"}
            <span className="hero-period">.</span>
          </h1>
          <p className="hero-statement">
            {en ? (
              <>
                A little theory.
                <br />
                <em>Something useful.</em>
              </>
            ) : (
              <>
                从一个问题出发，
                <br />
                <em>把想法做成作品。</em>
              </>
            )}
          </p>
          <p className="hero-bio">{SITE_DATA.profile.bio[lang]}</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/research">
              {en ? "Explore my research" : "了解我的研究"}{" "}
              <ArrowUpRight size={16} />
            </Link>
            <a
              className="text-link"
              href={`mailto:${SITE_DATA.profile.email}?subject=CV%20request`}
            >
              {en ? "Request my CV" : "索取简历"} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="portrait-frame">
            <img
              src={SITE_DATA.profile.avatarUrl}
              alt="Chaoan Li’s illustrated portrait"
              width="220"
              height="260"
            />
          </div>
          <div className="portrait-caption">
            <span>李朝安 / CHAOAN LI</span>
            <span>College Station, Texas</span>
          </div>
          <div className="aside-note">
            <span className="eyebrow">
              {en ? "ALSO, OFF THE CLOCK" : "研究之外"}
            </span>
            <p>
              {en
                ? "Making things. Asking questions. Talking with friends."
                : "做点工具，保持好奇，和朋友们聊聊天。"}
            </p>
            <a href="https://podcast.chaoanli.com/">
              {en ? "Listen to 轻松愉快" : "听听「轻松愉快」"}{" "}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>
      </section>
      <section className="site-wrap selected-work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / {en ? "SELECTED WORK" : "精选作品"}</p>
            <h2 id="work-title">
              {en ? "Ideas you can use." : "让想法，有用一点。"}
            </h2>
          </div>
          <Link className="text-link" to="/projects">
            {en ? "All projects" : "全部项目"} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="featured-grid">
          <ProjectFeature kind="options" lang={lang} />
          <ProjectFeature kind="grader" lang={lang} />
        </div>
      </section>
      <section
        className="site-wrap home-research"
        aria-labelledby="research-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / {en ? "RESEARCH" : "研究"}</p>
            <h2 id="research-title">
              {en ? "Questions worth pursuing." : "值得认真追问的问题。"}
            </h2>
          </div>
          <Link className="text-link" to="/research">
            {en ? "All publications" : "全部论文"} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="research-editorial">
          <p className="research-side-note">
            {en
              ? "How do we know a model is a good description of the world?"
              : "我们如何判断，一个模型能否可靠地描述真实世界？"}
          </p>
          <div>
            {SITE_DATA.publications.slice(0, 2).map((pub) => (
              <article className="research-row" key={pub.id}>
                <span className="eyebrow">
                  {pub.year} / {pub.venue}
                </span>
                <h3>
                  <a href={pub.link} target="_blank" rel="noreferrer">
                    {pub.title} <ArrowUpRight size={18} />
                  </a>
                </h3>
                <p>{pub.authors.join(", ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        className="site-wrap talks-section"
        aria-labelledby="talks-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              03 / {en ? "OUT IN THE WORLD" : "交流与分享"}
            </p>
            <h2 id="talks-title">{en ? "Talks & posters." : "报告与海报。"}</h2>
          </div>
          <p className="section-caption">
            {en
              ? "Ideas shared beyond the desk."
              : "把桌前的思考，带到更远的地方。"}
          </p>
        </div>
        <div className="talks-grid">
          <article className="talk-item">
            <span className="talk-mark">
              IN
              <br />
              FORMS<span>↗</span>
            </span>
            <div>
              <span className="eyebrow">
                {en ? "POSTER PRESENTATION" : "海报展示"}
              </span>
              <h3>INFORMS</h3>
              <p>
                {en
                  ? "Poster and presentation materials to follow."
                  : "海报与展示材料稍后补充。"}
              </p>
            </div>
          </article>
          <article className="talk-item">
            <span className="talk-mark philadelphia">
              PHL<span>↗</span>
            </span>
            <div>
              <span className="eyebrow">
                {en ? "RESEARCH TALK" : "学术报告"}
              </span>
              <h3>{en ? "Philadelphia" : "费城"}</h3>
              <p>
                {en
                  ? "Talk details and slides to follow."
                  : "报告详情与幻灯片稍后补充。"}
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="podcast-strip">
        <div className="site-wrap podcast-strip-inner">
          <div className="podcast-strip-label">
            <Mic2 size={22} />
            <span>
              {en ? "A DIFFERENT KIND OF CONVERSATION" : "换一种方式，聊聊生活"}
            </span>
          </div>
          <a href="https://podcast.chaoanli.com/">
            <span>轻松愉快</span>
            <ArrowUpRight size={36} />
          </a>
          <p>
            {en
              ? "A Mandarin podcast with friends, about life and the things that stay with us."
              : "和好朋友们聊聊生活，也聊聊那些让我们念念不忘的事。"}
          </p>
        </div>
      </section>
    </>
  );
}
