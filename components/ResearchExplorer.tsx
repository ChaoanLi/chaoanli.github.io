import React, { useId, useState } from "react";
import { Language } from "../types";
import { validationExample, calibrationExample } from "../data/research-explainers.mjs";

type Point = { x: number; y: number };

function CurveChart({ series, en, label, regions = false }: {
  series: { name: string; points: Point[]; dashed?: boolean }[]; en: boolean; label: string; regions?: boolean;
}) {
  const all = series.flatMap(s => s.points);
  const minY = Math.min(0, ...all.map(p => p.y)) - 0.05;
  const maxY = Math.max(1, ...all.map(p => p.y)) + 0.05;
  const y = (v: number) => 224 - (v - minY) / (maxY - minY) * 194;
  return <div className="explorer-chart">
    <svg viewBox="0 0 600 270" role="img" aria-label={label}>
      <title>{label}</title>
      {regions && [0, 1, 2].map(i => <g key={i}>
        <rect x={54 + i * 172} y="24" width="172" height="200" className={i === 1 ? "explorer-region-center" : "explorer-region-side"} />
        <text x={140 + i * 172} y="44" textAnchor="middle">{en ? "Region" : "区域"} {i + 1}</text>
      </g>)}
      {[0, 0.5, 1].map(v => <g key={v}>
        <line x1={54 + v * 516} x2={54 + v * 516} y1="24" y2="224" className="explorer-grid" />
        <text x={54 + v * 516} y="244" textAnchor="middle">{v}</text>
      </g>)}
      {[0, 0.5, 1].map(v => <g key={v}>
        <line x1="54" x2="570" y1={y(v)} y2={y(v)} className="explorer-grid" />
        <text x="42" y={y(v) + 4} textAnchor="end">{v}</text>
      </g>)}
      <text x="54" y="15">{en ? "Response (example units)" : "响应（示例单位）"}</text>
      <text x="570" y="265" textAnchor="end">{en ? "Input (0–1)" : "输入（0–1）"}</text>
      {series.map((s, i) => <path key={s.name} className={`explorer-line series-${i}`} fill="none"
        strokeDasharray={s.dashed ? "7 5" : undefined}
        d={s.points.map((p, j) => `${j ? "L" : "M"}${(54 + p.x * 516).toFixed(2)},${y(p.y).toFixed(2)}`).join(" ")} />)}
    </svg>
    <div className="explorer-legend">{series.map((s, i) => <span key={s.name}>
      <i className={`series-${i}${s.dashed ? " dashed" : ""}`} />{s.name}
    </span>)}</div>
  </div>;
}

function Choice({ value, current, onChange, children }: {
  value: string; current: string; onChange: (v: string) => void; children: React.ReactNode;
}) {
  return <button type="button" aria-pressed={current === value} onClick={() => onChange(value)}>{children}</button>;
}

function Validation({ en }: { en: boolean }) {
  const [mode, setMode] = useState("local");
  const { points, regions } = validationExample(mode);
  return <>
    <h3>{en ? "A good overall trend can hide a local error" : "整体趋势接近，也可能漏掉局部偏差"}</h3>
    <p>{en ? "Choose where the model is wrong. Compare the blue curve with the constructed observations, then inspect each third of the input range." : "选择偏差出现的位置。比较蓝色模型曲线与构造的观测，再检查输入范围的三个区域。"}</p>
    <div className="explorer-controls" role="group" aria-label={en ? "Discrepancy scenario" : "偏差情形"}>
      {[["none", "No systematic discrepancy", "无系统偏差"], ["local", "Local discrepancy", "局部偏差"], ["global", "Global discrepancy", "整体偏差"]].map(([v, a, b]) =>
        <Choice key={v} value={v} current={mode} onChange={setMode}>{en ? a : b}</Choice>)}
    </div>
    <CurveChart en={en} regions label={en ? "Model versus constructed observations" : "模型与构造观测的比较"} series={[
      { name: en ? "Simulator" : "模拟器", points: points.map(p => ({ x: p.x, y: p.model })) },
      { name: en ? "Constructed observations" : "构造观测", points: points.map(p => ({ x: p.x, y: p.observed })), dashed: true },
    ]} />
    <div className="explorer-regions" aria-live="polite">{regions.map((v, i) => <div key={i}>
      <span>{en ? "Region" : "区域"} {i + 1}</span><strong>{v.toFixed(3)}</strong>
      <small>{en ? "Mean specified discrepancy" : "设定偏差的区域均值"}</small>
    </div>)}</div>
    <p className="explorer-takeaway" aria-live="polite">{mode === "local"
      ? en ? "The discrepancy is concentrated in region 2. This is why the location of model error matters alongside an overall comparison." : "偏差集中在区域 2。这说明除了整体比较，还需要定位模型偏差出现在哪里。"
      : mode === "none" ? en ? "The small fluctuations were added to the example. A visible gap alone does not tell us whether a systematic discrepancy exists." : "示例里仍有小幅波动。仅凭看得见的间隙，无法判断是否存在系统偏差。"
        : en ? "All three regions carry the same specified offset. The scope of the discrepancy has changed." : "三个区域都有相同的设定偏移；偏差影响的范围变了。"}</p>
    <p className="explorer-scope">{en ? "Teaching example: y = 0.2 + 0.5x plus a specified discrepancy and a fixed sinusoidal fluctuation. These are not measurements or FMMT results; the region values are descriptive, not p-values." : "教学示例：y = 0.2 + 0.5x，加上设定偏差与固定正弦波动。这些不是实测数据或 FMMT 结果；区域数值仅用于描述，不是 p 值。"}</p>
  </>;
}

function Calibration({ en }: { en: boolean }) {
  const [metric, setMetric] = useState("values");
  const result = calibrationExample(metric === "values" ? 0 : 1);
  return <>
    <h3>{en ? "Same data. Same simulator. A different meaning of “best”." : "同样的数据和模型，“最好”可以有不同含义"}</h3>
    <p>{en ? "Our simple simulator is a straight line with slope θ. Choose whether to match values alone, or also their rates of change. The optimum is recomputed for that objective." : "这里的简单模拟器是一条斜率为 θ 的直线。选择只匹配数值，或同时匹配变化趋势，观察最优参数如何改变。"}</p>
    <div className="explorer-controls" role="group" aria-label={en ? "Calibration objective" : "校准目标"}>
      <Choice value="values" current={metric} onChange={setMetric}>{en ? "Match values · L²" : "匹配数值 · L²"}</Choice>
      <Choice value="slopes" current={metric} onChange={setMetric}>{en ? "Values + slopes · H¹" : "数值与趋势 · H¹"}</Choice>
    </div>
    <CurveChart en={en} label={en ? "A fixed target curve and its calibrated linear simulator" : "固定目标曲线与校准后的直线模拟器"} series={[
      { name: en ? "Calibrated simulator" : "校准后的模拟器", points: result.points.filter((_, i) => i % 10 === 0).map(p => ({ x: p.x, y: result.theta * p.x })) },
      { name: en ? "Target curve" : "目标曲线", points: result.points.filter((_, i) => i % 10 === 0).map(p => ({ x: p.x, y: p.y })), dashed: true },
    ]} />
    <p className="explorer-takeaway" aria-live="polite">{en ? "Optimal slope" : "最优斜率"} θ = <strong>{result.theta.toFixed(3)}</strong>. {en ? "Which value is correct? Each minimizes a different objective. The scientific question determines which objective is appropriate." : "哪个值才正确？两者分别使不同目标最小；应由科学问题决定哪个目标合适。"}</p>
    <p className="explorer-scope">{en ? "Exact teaching setup: f(x) = x + 0.3 sin(2πx), simulator θx, x ∈ [0,1]. We numerically minimize the integrated squared value error, with or without integrated squared derivative error. This is a concept example, not the ion-channel experiment or an uncertainty guarantee." : "明确的教学构造：f(x) = x + 0.3 sin(2πx)，模拟器为 θx，x ∈ [0,1]。数值最小化积分平方误差，并选择是否加入导数的积分平方误差。这是概念示例，不是离子通道实验，也不提供不确定性保证。"}</p>
  </>;
}

function Watermark({ en }: { en: boolean }) {
  return <>
    <h3>{en ? "Two observers. Two different questions." : "两种观察者，回答不同的问题"}</h3>
    <dl className="watermark-questions">
      <div><dt>{en ? "Key holder" : "持有密钥的一方"}</dt><dd>{en ? "Given a text and the key: does this text carry my watermark?" : "拿着文本和密钥：这段文本带有我的水印吗？"}</dd></div>
      <div><dt>{en ? "Outside observer" : "不持有密钥的外部观察者"}</dt><dd>{en ? "Given two text collections: do they share a watermark key?" : "只有两组文本：它们是否共享水印密钥？"}</dd></div>
    </dl>
    <p>{en ? "Counting repeated context–continuation pairs is only a first step. Repetition can also arise from ordinary language patterns and shared content." : "统计重复的“上下文—后续词”组合只是第一步。正常的语言规律和相似内容，也会造成重复。"}</p>
    <ol className="watermark-reference-flow">
      <li>{en ? "Score the two collections" : "计算两组文本的得分"}</li>
      <li>{en ? "Compare against matched reference collections" : "与匹配的参考集合比较"}</li>
      <li>{en ? "Assess whether the score is unusual under independent keys" : "判断这一得分在独立密钥下是否异常"}</li>
    </ol>
    <p className="explorer-takeaway">{en ? "A count alone is not evidence of key reuse. Reference collections provide the comparison needed for a statistical test; their sampling and exchangeability determine whether that test is valid." : "一个计数本身不是密钥复用的证据。参考集合提供统计检验所需的比较基准；抽样方式与可交换性决定检验是否有效。"}</p>
    <p className="explorer-scope">{en ? "Method schematic, not an experiment result. No watermark key or real-world source is identified by this diagram." : "方法示意，不是实验结果。此图不识别任何真实水印密钥或来源。"}</p>
  </>;
}

export default function ResearchExplorer({ kind, lang }: { kind: string; lang: Language }) {
  const id = useId();
  const en = lang === "en";
  return <section className={`research-explorer explorer-${kind}`} aria-labelledby={id}>
    <p className="explorer-eyebrow" id={id}>{kind === "watermark" ? en ? "The testing problem" : "要检验的问题" : en ? "A worked example" : "一个具体例子"}</p>
    {kind === "watermark" ? <Watermark en={en} /> : kind === "calibration" ? <Calibration en={en} /> : <Validation en={en} />}
  </section>;
}
