import React from "react";
import { Language } from "../types";
import { SITE_DATA } from "../constants";

export default function ProjectsPage({ lang }: { lang: Language }) {
  const en = lang === "en";
  const apps = SITE_DATA.projects.filter((p) =>
    ["p2", "bsmoption"].includes(p.id),
  );
  return (
    <div className="site-wrap software-page">
      <h1>{en ? "Software" : "软件"}</h1>
      <p>
        {en
          ? "Tools and applications I build."
          : "我开发的工具与应用。"}
      </p>
      {apps.map((app) => (
        <article className="software-entry" key={app.id}>
          <h2>
            {app.id === "p2"
              ? "EasyGrader / AutoGrade Studio"
              : app.title[lang]}
          </h2>
          <p>{app.description[lang]}</p>
          <div className="research-row-links">
            <a href={app.liveUrl} target="_blank" rel="noreferrer">
              {en ? "Open application" : "打开应用"} ↗
            </a>
            <a href={app.githubUrl} target="_blank" rel="noreferrer">
              {en ? "Source code" : "源代码"} ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
