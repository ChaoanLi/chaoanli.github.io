import React, { useId, useState } from "react";
import { Language } from "../types";
import { validationExample, calibrationExample, contextCollisions } from "../data/research-explainers.mjs";

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
    <p className="explorer-takeaway" aria-live="polite">{en ? "Optimal slope" : "最优斜率"} θ = <strong>{result.theta.toFixed(3)}</strong>. {en ? "Changing the objective changes the parameter we are trying to estimate." : "改变目标，也就改变了我们要估计的参数。"}</p>
    <p className="explorer-scope">{en ? "Exact teaching setup: f(x) = x + 0.3 sin(2πx), simulator θx, x ∈ [0,1]. We numerically minimize the integrated squared value error, with or without integrated squared derivative error. This is a concept example, not the ion-channel experiment or an uncertainty guarantee." : "明确的教学构造：f(x) = x + 0.3 sin(2πx)，模拟器为 θx，x ∈ [0,1]。数值最小化积分平方误差，并选择是否加入导数的积分平方误差。这是概念示例，不是离子通道实验，也不提供不确定性保证。"}</p>
  </>;
}

const collectionA = ["the quiet river meets the sea", "a small river meets the sea", "the old tree shades the path"];
const collectionB = {
  more: ["a wide river meets the sea", "the young tree shades the path", "the green tree shades the path"],
  fewer: ["a wide river crosses the valley", "the young tree guards the field", "the green tree follows the stream"],
};

function Watermark({ en }: { en: boolean }) {
  const [mode, setMode] = useState("more");
  const [width, setWidth] = useState("1");
  const B = collectionB[mode as keyof typeof collectionB];
  const result = contextCollisions(collectionA, B, Number(width));
  return <>
    <h3>{en ? "Look for repeated continuations across two collections" : "在两组文本之间，寻找重复的上下文与后续词"}</h3>
    <p>{en ? "A reused watermark key can favor the same next token after a shared context. First understand what a collision counts; deciding whether it is unusual requires matched reference collections." : "复用的水印密钥可能让共享上下文之后的同一 token 更容易出现。先理解“碰撞”在数什么；要判断碰撞是否异常，还需要匹配的参考集合。"}</p>
    <div className="explorer-controls" role="group" aria-label={en ? "Constructed text example" : "构造文本示例"}>
      <Choice value="more" current={mode} onChange={setMode}>{en ? "More matching continuations" : "更多相同后续词"}</Choice>
      <Choice value="fewer" current={mode} onChange={setMode}>{en ? "Fewer matching continuations" : "更少相同后续词"}</Choice>
    </div>
    <div className="explorer-text-pair">{[collectionA, B].map((collection, i) => <div key={i}>
      <h4>{en ? "Collection" : "文本集合"} {i === 0 ? "A" : "B"}</h4>
      {collection.map((text, j) => <p key={j} lang="en">{text}</p>)}
    </div>)}</div>
    <div className="explorer-controls" role="group" aria-label={en ? "Context width" : "上下文长度"}>
      <span>{en ? "Context" : "上下文"}</span>
      {["1", "2"].map(v => <Choice key={v} value={v} current={width} onChange={setWidth}>{v} {en ? "word(s)" : "个词"}</Choice>)}
    </div>
    <div className="explorer-collisions" aria-live="polite">
      <p><strong>{result.total}</strong> {en ? "collisions across 9 document pairs" : "次碰撞，来自 9 对文本"} · {en ? "Mean score" : "平均得分"} <strong>{result.score.toFixed(2)}</strong></p>
      <div>{result.matches.length ? result.matches.map(m => <code key={m}>{m}</code>) : <span>{en ? "No matching context–continuation pairs." : "没有相同的“上下文 → 后续词”组合。"}</span>}</div>
    </div>
    <p className="explorer-takeaway">{en ? "Detecting a watermark with its key and linking sources without a key are different tasks. Sharing a key also does not establish a shared human author." : "持有密钥检测水印，与不持有密钥关联来源，是不同的任务。共享密钥也不等于同一个人写作。"}</p>
    <p className="explorer-scope">{en ? "Constructed counting demo, not LLM output. Words stand in for tokenizer tokens; only the first occurrence of a context in each document is counted. These scores alone cannot establish key reuse, detection power or privacy risk." : "这是手工构造的计数演示，不是 LLM 生成文本。用词代替分词器的 token，每篇只计同一上下文首次出现的位置。仅凭这里的得分，不能认定密钥复用、检测能力或隐私风险。"}</p>
  </>;
}

export default function ResearchExplorer({ kind, lang }: { kind: string; lang: Language }) {
  const id = useId();
  const en = lang === "en";
  return <section className={`research-explorer explorer-${kind}`} aria-labelledby={id}>
    <p className="explorer-eyebrow" id={id}>{en ? "01 / BUILD AN INTUITION · INTERACTIVE EXAMPLE" : "01 / 建立直觉 · 可交互示例"}</p>
    {kind === "watermark" ? <Watermark en={en} /> : kind === "calibration" ? <Calibration en={en} /> : <Validation en={en} />}
  </section>;
}
