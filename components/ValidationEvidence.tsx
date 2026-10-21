import React from "react";
import { Language } from "../types";
import csv from "../public/research/data/validation-pvalues.csv?raw";
import { parseValidationResults } from "../data/validation-results.mjs";

const rows = parseValidationResults(csv);
const format = (n: number) => n < 0.001 ? n.toExponential(2) : n.toFixed(4);

export default function ValidationEvidence({ lang }: { lang: Language }) {
  const en = lang === "en";
  const global = rows.find(row => row.test === "global")!;
  const local = rows.filter(row => row.test.startsWith("subdomain"));
  return <section className="validation-evidence" aria-label={en ? "Shear-layer case study" : "剪切层真实案例"}>
    <p className="explorer-eyebrow">{en ? "02 / CHECK THE EVIDENCE · REAL CASE STUDY" : "02 / 查看证据 · 真实案例"}</p>
    <h3>{en ? "Where does a flow simulator disagree with measurements?" : "流动仿真在哪些条件下偏离实测数据？"}</h3>
    <p>{en ? "32 physical observations and 11 simulator runs over convective Mach numbers 0–1.5. The global FMMT p-value is " : "在对流 Mach 数 0–1.5 范围内，比较 32 个物理观测与 11 次仿真运行。整体 FMMT 检验的 p 值为 "}<strong>{format(global.p_value)}</strong>{en ? "." : "。"}</p>
    <p>{en ? "The six regional tests below use Bonferroni-adjusted p-values at level 0.05. Four regions show evidence of discrepancy; two do not reject." : "下表对六个区域检验采用 Bonferroni 调整，并在 0.05 水平判断。四个区域发现偏差证据，两个区域未拒绝原假设。"}</p>
    <table className="evidence-table">
      <caption>{en ? "Regional tests, with correction for six comparisons" : "六个区域的检验结果（已作多重比较调整）"}</caption>
      <thead><tr><th>{en ? "Mach range" : "Mach 数范围"}</th><th>{en ? "Adjusted p" : "调整后 p 值"}</th><th>{en ? "Decision at 0.05" : "0.05 水平的判断"}</th></tr></thead>
      <tbody>{local.map(row => <tr key={row.test}>
        <td>{row.domain_low.toFixed(2)}–{row.domain_high.toFixed(2)}</td>
        <td>{format(row.adjusted_p_value)}</td>
        <td><span className={row.reject ? "evidence-found" : "evidence-inconclusive"}>{row.reject ? en ? "Discrepancy detected" : "发现偏差证据" : en ? "Does not reject" : "未拒绝"}</span></td>
      </tr>)}</tbody>
    </table>
    <p className="explorer-scope">{en ? "Non-rejection is not proof of agreement. These results concern this case, not universal superiority over other tests. Saved FMMT results, snapshot 2026-10-20; observations originate from Wang, Chen & Tsui (2009)." : "未拒绝不等于证明模型一致。这些结果限于本案例，不代表方法普遍优于其他检验。采用 2026-10-20 保存的 FMMT 结果；观测源自 Wang、Chen 与 Tsui（2009）。"}</p>
    <div className="research-row-links">
      <a href="/research/data/validation-pvalues.csv" download>{en ? "Results (CSV)" : "结果数据（CSV）"} ↓</a>
      <a href="/research/data/validation-provenance.json" target="_blank" rel="noreferrer">{en ? "Source & version" : "数据来源与版本"} ↗</a>
      <a href="https://arxiv.org/abs/2604.17144" target="_blank" rel="noreferrer">{en ? "Related preprint" : "相关预印本"} ↗</a>
    </div>
  </section>;
}
