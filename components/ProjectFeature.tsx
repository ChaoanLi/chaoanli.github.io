import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Language } from "../types";

export default function ProjectFeature({
  kind,
  lang,
}: {
  kind: "options" | "grader";
  lang: Language;
}) {
  const option = kind === "options";
  return (
    <article
      className={`project-feature ${option ? "project-options" : "project-grader"}`}
    >
      <div className="project-art" aria-hidden="true">
        <div className="art-meta">
          <span>
            {option ? "MATHEMATICS → INTERFACE" : "TEACHING → FEEDBACK"}
          </span>
          <span>{option ? "01" : "02"}</span>
        </div>
        {option ? (
          <div className="option-illustration">
            <span className="art-formula">C = max(S − K, 0)</span>
            <svg viewBox="0 0 480 180" role="presentation">
              <path d="M35 15V150H460" className="chart-axis" />
              <path
                d="M35 105H460M35 60H460M145 15V150M250 15V150M355 15V150"
                className="chart-grid"
              />
              <path d="M35 149H250L450 28" className="chart-line" />
              <circle cx="250" cy="149" r="5" className="chart-point" />
              <text x="245" y="174">
                K
              </text>
              <text x="410" y="174">
                S →
              </text>
            </svg>
            <span className="art-caption">
              {lang === "en"
                ? "An illustrative call payoff at expiry"
                : "看涨期权到期收益示意"}
            </span>
          </div>
        ) : (
          <div className="grading-illustration">
            <div className="paper-stack">
              <span className="paper-label">SUBMISSION</span>
              <div className="paper-rule" />
              <div className="paper-rule" />
              <div className="paper-rule short" />
              <span className="paper-equation">f(x) = …</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="feedback-stack">
              <span className="paper-label">RUBRIC-BASED FEEDBACK</span>
              <div className="feedback-line">
                <i>✓</i>
                <span>
                  {lang === "en" ? "Evaluate understanding" : "理解与推理"}
                </span>
              </div>
              <div className="feedback-line">
                <i>✓</i>
                <span>
                  {lang === "en" ? "Explain the reasoning" : "清晰的反馈"}
                </span>
              </div>
              <div className="feedback-line">
                <i>↗</i>
                <span>{lang === "en" ? "Review & export" : "审阅与导出"}</span>
              </div>
              <span className="workflow-label">
                {lang === "en" ? "Workflow illustration" : "工作流程示意"}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="project-copy">
        <p className="eyebrow">
          {option
            ? lang === "en"
              ? "QUANTITATIVE TOOL"
              : "量化工具"
            : lang === "en"
              ? "AI FOR EDUCATION"
              : "AI 与教育"}
        </p>
        <h3>
          {option
            ? lang === "en"
              ? "Options, made tangible."
              : "让期权定价变得直观。"
            : lang === "en"
              ? "A thoughtful teaching assistant."
              : "一个更细致的在线助教。"}
        </h3>
        <p>
          {option
            ? lang === "en"
              ? "An option-pricing interface connecting mathematical models with prices, sensitivities, and market data."
              : "把数学模型、价格、敏感度与市场数据连接起来的期权定价工具。"
            : lang === "en"
              ? "EasyGrader / AutoGrade Studio turns assignment instructions and grading rubrics into structured, reviewable feedback."
              : "EasyGrader / AutoGrade Studio 将作业要求和评分标准转化为结构化、可审阅的反馈。"}
        </p>
        <div className="project-links">
          {option && (
            <a
              href="https://bsm-option-calculator.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              {lang === "en" ? "Open calculator" : "打开计算器"}{" "}
              <ArrowUpRight size={16} />
            </a>
          )}
          <a
            href={`https://github.com/ChaoanLi/${option ? "BSMoption" : "EasyGrader"}`}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} />
            {lang === "en" ? "Explore the project" : "查看项目"}
          </a>
        </div>
      </div>
    </article>
  );
}
