import React from "react";
import { Language } from "../types";
import physicalCsv from "../data/validation-observations.csv?raw";
import simulatorCsv from "../data/validation-simulator.csv?raw";
import resultsCsv from "../data/validation-pvalues.csv?raw";
import { parseValidationResults } from "../data/validation-results.mjs";

const observations = parseValidationResults(physicalCsv);
const simulator = parseValidationResults(simulatorCsv).sort((a, b) => a.convective_mach - b.convective_mach);
const regions = parseValidationResults(resultsCsv).filter(row => row.test.startsWith("subdomain"));

export default function ValidationCaseStory({ lang }: { lang: Language }) {
  const en = lang === "en";
  const x = (value: number) => 58 + value / 1.5 * 602;
  const y = (value: number) => 274 - (value - 0.3) / 1.1 * 210;
  return <section className="validation-case-story" aria-labelledby="validation-case-title">
    <div className="case-story-text">
      <p className="eyebrow">{en ? "A model-validation case study" : "一个模型验证案例"}</p>
      <h2 id="validation-case-title">{en ? "Following the trend is not enough." : "趋势接近，就能相信模型吗？"}</h2>
      <p>{en ? "A flow simulator and physical measurements both fall as the input increases. Yet the simulator can miss the response within parts of that range." : "随着输入增大，流动仿真与实测响应都在下降。但整体趋势相近，仍可能掩盖部分输入范围内的偏差。"}</p>
      <p>{en ? "Our test found evidence of disagreement in four of six predefined regions, after correcting for multiple comparisons." : "我们的方法在六个预设区域中的四个发现了偏差证据，结果已作多重比较调整。"}</p>
      <p className="case-story-conclusion">{en ? "This tells a researcher where to investigate further. It does not certify the other two regions as accurate." : "这让研究者知道该进一步检查哪里；另外两个区域未检出，不等于已经证明模型准确。"}</p>
      <a href="#validation">{en ? "Method, results & my contribution" : "方法、结果与我的工作"} →</a>
    </div>
    <figure className="case-story-figure">
      <svg viewBox="0 0 700 330" role="img" aria-label={en ? "32 physical observations and 11 simulator runs. Shading marks the four regions with evidence of discrepancy after Bonferroni correction." : "32 个实测点与 11 次仿真运行；阴影标出 Bonferroni 调整后发现偏差证据的四个区域。"}>
        <title>{en ? "Measured response versus simulator runs" : "实测响应与仿真运行的比较"}</title>
        {regions.map((row, i) => <g key={i}>
          <rect x={x(row.domain_low)} y="54" width={x(row.domain_high) - x(row.domain_low)} height="220" fill={row.reject ? "#eaf1fa" : "transparent"} />
          <line x1={x(row.domain_low)} x2={x(row.domain_low)} y1="54" y2="274" stroke="#d2d2d7" strokeDasharray="3 4" />
          <text x={x((row.domain_low + row.domain_high) / 2)} y="44" textAnchor="middle">{i + 1}</text>
        </g>)}
        {[0.5, 1, 1.25].map(value => <g key={value}>
          <line x1="58" x2="660" y1={y(value)} y2={y(value)} stroke="#e5e5e7" />
          <text x="48" y={y(value) + 4} textAnchor="end">{value}</text>
        </g>)}
        {[0, 0.5, 1, 1.5].map(value => <text key={value} x={x(value)} y="294" textAnchor="middle">{value}</text>)}
        <text x="58" y="20">{en ? "Compressibility factor" : "可压缩性因子"} Φ</text>
        <text x="660" y="318" textAnchor="end">{en ? "Convective Mach number" : "对流 Mach 数"}</text>
        <path fill="none" stroke="#515154" strokeWidth="2" d={simulator.map((p, i) => `${i ? "L" : "M"}${x(p.convective_mach)},${y(p.compressibility_factor)}`).join(" ")} />
        {simulator.map((p, i) => <rect key={i} x={x(p.convective_mach) - 3.5} y={y(p.compressibility_factor) - 3.5} width="7" height="7" fill="white" stroke="#515154" strokeWidth="1.5" />)}
        {observations.map((p, i) => <circle key={i} cx={x(p.convective_mach)} cy={y(p.compressibility_factor)} r="4" fill="#0066cc" stroke="white" strokeWidth="0.7" />)}
      </svg>
      <div className="case-story-legend"><span><i className="case-observation" />{en ? "32 physical observations" : "32 个实测点"}</span><span><i className="case-simulator" />{en ? "11 simulator runs" : "11 次仿真运行"}</span><span><i className="case-region" />{en ? "Discrepancy evidence" : "发现偏差证据的区域"}</span></div>
      <figcaption>{en ? "Real case data. The line only joins simulator runs; shading comes from the saved regional tests at level 0.05, not visual judgments of the gaps." : "真实案例数据。连线只连接仿真运行；阴影来自保存的 0.05 水平区域检验结果，不是凭图上的间隙判断。"} <a href="/research/data/validation-provenance.json" target="_blank" rel="noreferrer">{en ? "Data & source" : "数据与来源"} ↗</a></figcaption>
    </figure>
  </section>;
}
