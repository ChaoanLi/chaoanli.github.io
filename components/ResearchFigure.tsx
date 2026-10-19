import React, { useState } from "react";
import { Language } from "../types";
import MathFormula from "./MathFormula";
import { researchStories } from "../data/researchStories";

export const researchImages: Record<string, string> = {
  validation: "/research/validation-shear-layer.png",
  calibration: "/research/calibration-curves.svg",
  fourier: "/research/fourier-0.svg",
  campanato: "/research/campanato-0-1.svg",
};

export default function ResearchFigure({
  kind,
  lang,
}: {
  kind: string;
  lang: Language;
}) {
  const en = lang === "en";
  const [scale, setScale] = useState(0);
  const [degree, setDegree] = useState(1);
  const [intervals, setIntervals] = useState(false);
  const scaleControl = (label: string) => (
    <div className="figure-control" role="group" aria-label={label}>
      <span>{label}</span>
      {[-1, 0, 1].map((k) => (
        <button key={k} aria-pressed={scale === k} onClick={() => setScale(k)}>
          k = {k}
        </button>
      ))}
    </div>
  );
  const image =
    kind === "fourier"
      ? `/research/fourier-${scale}.svg`
      : kind === "campanato"
        ? `/research/campanato-${scale}-${degree}.svg`
        : kind === "calibration" && intervals
          ? "/research/calibration-intervals.svg"
          : researchImages[kind];
  const alt: Record<string, string> = {
    validation: en
      ? "Original shear-layer analysis: physical and simulator fits, data density, global and subdomain statistics and p-values."
      : "剪切层原始结果：物理与仿真拟合、数据密度、整体及子域统计量和 p 值。",
    calibration: en
      ? "Cardiac sodium-channel calibration: observed current and fitted curves, or marginal confidence intervals under two norms."
      : "心脏钠离子通道校准：电流观测与拟合曲线，或两种范数下的参数置信区间。",
    fourier: en
      ? `Spatial and Fourier magnitudes of a Gaussian derivative under anisotropic dilation, scale k=${scale}.`
      : `Gaussian 导数在各向异性伸缩下的空间函数与 Fourier 模，尺度 k=${scale}。`,
    campanato: en
      ? `Function, degree-${degree} polynomial projection, and residual on an anisotropic ball at scale ${scale}.`
      : `尺度 ${scale} 的各向异性球上的函数、${degree} 次多项式投影与残差。`,
  };
  return (
    <figure className="research-figure">
      <div className="figure-toolbar">
        <span className="figure-type">
          {kind === "validation" || kind === "calibration"
            ? en
              ? "CASE STUDY · RESEARCH RESULTS"
              : "案例研究 · 真实结果"
            : en
              ? "MATHEMATICAL EXAMPLE · INTERACTIVE"
              : "数学构造 · 可交互示例"}
        </span>
        {kind === "calibration" && (
          <div
            className="figure-control"
            role="group"
            aria-label={en ? "Calibration figure" : "校准图表"}
          >
            <button
              aria-pressed={!intervals}
              onClick={() => setIntervals(false)}
            >
              {en ? "Fitted curves" : "拟合曲线"}
            </button>
            <button aria-pressed={intervals} onClick={() => setIntervals(true)}>
              {en ? "Parameter intervals" : "参数区间"}
            </button>
          </div>
        )}
        {(kind === "fourier" || kind === "campanato") &&
          scaleControl(en ? "Dilation scale" : "伸缩尺度")}
        {kind === "campanato" && (
          <div
            className="figure-control"
            role="group"
            aria-label={en ? "Polynomial degree" : "多项式次数"}
          >
            {[0, 1].map((d) => (
              <button
                key={d}
                aria-pressed={degree === d}
                onClick={() => setDegree(d)}
              >
                d = {d}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="figure-reading-guide">
        <h3>{en ? "How to read this figure" : "这张图怎么看"}</h3>
        {!(kind === "calibration" && intervals) && <p>{researchStories[kind].guide[lang]}</p>}
        {kind === "calibration" && intervals && <p>{en ? "In this view, dots are parameter estimates and horizontal lines are marginal 95% confidence intervals. Each panel corresponds to one parameter; the two rows use different calibration targets." : "当前视图中，点是参数估计，横线是边际 95% 置信区间。每幅图对应一个参数，两行使用不同的校准目标。可以比较两行的参数估计，但区间重叠不是目标相等的检验。"}</p>}
      </div>
      <p className="figure-mobile-hint">
        {en
          ? "Swipe the figure horizontally · tap to open full size"
          : "横向滑动查看完整图表 · 点击可打开原图"}
      </p>
      <a
        className="figure-image-link"
        href={image}
        target="_blank"
        rel="noreferrer"
        aria-label={en ? "Open full-size research figure" : "打开研究图原图"}
      >
        <img
          src={image}
          alt={alt[kind]}
          width="1000"
          height={kind === "validation" ? "750" : "480"}
        />
      </a>
      <figcaption aria-live="polite">
        <details className="figure-technical">
          <summary>{en ? "Figure definitions, methods & source" : "图表定义、方法与来源"}</summary>
        {kind === "validation" && (
          <>
            <p>
              {en
                ? "Physical observations (n = 32) versus simulator data (n = 11). FMMT tests the whole Mach-number range [0, 1.5] and six subdomains of width 0.25. The dashed line marks α = 0.05; non-rejection does not establish equivalence."
                : "物理观测 n = 32，仿真数据 n = 11。FMMT 检验 Mach 数区间 [0, 1.5] 及六个宽度为 0.25 的子域。虚线为 α = 0.05；未拒绝原假设不等于证明模型等价。"}
            </p>
            <p className="figure-source">
              {en
                ? "Original figure from the public preprint, shear-layer application."
                : "原图来自公开预印本的剪切层应用章节。"}{" "}
              <a href="https://arxiv.org/abs/2604.17144">arXiv:2604.17144 ↗</a>
            </p>
          </>
        )}
        {kind === "calibration" && (
          <>
            <p>
              {intervals
                ? en
                  ? "Points and marginal 95% plug-in intervals for θ₁, θ₂ and θ₃, read directly from the saved calibration results. L² and W¹ estimate different norm-defined targets. Interval overlap is not a test that the targets are equal; these are parameter intervals, not prediction bands."
                  : "θ₁、θ₂、θ₃ 的点估计及边际 95% 插入式置信区间，直接读取已保存的校准结果。L² 与 W¹ 对应不同范数定义的目标；区间重叠不是目标相等的检验。这些是参数区间，不是预测带。"
                : en
                  ? "The same 19 observations and four-state Markov simulator, calibrated with L², Sobolev W¹ and RKHS objectives. Curves are recomputed from the saved parameter estimates, not traced from an image. The exact fitting-RKHS curve is shown only as a numerical benchmark."
                  : "同一组 19 个观测、同一个四状态 Markov 模拟器，分别使用 L²、Sobolev W¹ 与 RKHS 目标校准。曲线由保存的参数估计重新计算，未从图片描点。精确拟合 RKHS 曲线仅作为数值基准。"}
            </p>
            <p className="figure-source">
              {en
                ? "Source: calibration manuscript, cardiac sodium ion-channel study; observations from the Zhang & Wang supplementary data."
                : "来源：校准论文的心脏钠离子通道案例；观测来自 Zhang 与 Wang 的补充数据。"}{" "}
              <a href="https://doi.org/10.1080/01621459.2024.2340793">
                {en ? "Data provenance" : "数据出处"} ↗
              </a>{" "}
              ·{" "}
              <a href="/research/data/calibration-estimates.csv">
                {en ? "Estimates (CSV)" : "参数结果（CSV）"}
              </a>
            </p>
          </>
        )}
        {kind === "fourier" && (
          <>
            <MathFormula tex={String.raw`f(x)=\frac{\partial}{\partial x_1}e^{-\pi\lVert x\rVert^2},\qquad A=\operatorname{diag}(2,4)`} />
            <MathFormula tex={String.raw`f_k(x)=f(A^{-k}x),\qquad \widehat{f_k}(\xi)=8^k\widehat f((A^{\mathsf T})^k\xi)`} />
            <p>{en ? "Here x is the spatial coordinate, ξ is frequency, A stretches the two directions by factors 2 and 4, and k selects the scale. The hat denotes the Fourier transform; 8 is the determinant of A." : "这里 x 是空间坐标，ξ 是频率，A 沿两个方向分别拉伸 2 倍与 4 倍，k 选择尺度。帽子表示 Fourier 变换，8 是 A 的行列式。"}</p>
            <p>
              {en
                ? "Increasing k stretches the spatial function by different amounts in the two directions and compresses its spectrum through the transpose dilation. Both axes stay fixed across scales; frequency magnitude is divided by 8ᵏ for comparison. This exact Gaussian-derivative example explains the dilation identity behind the paper’s geometry, rather than simulating its general Hardy-space theorem."
                : "增大 k 会沿两个方向以不同倍数拉伸空间函数，频谱则通过转置伸缩压缩。各尺度使用固定坐标轴；频域模除以 8ᵏ 以便比较。这个 Gaussian 导数的精确例子解释论文几何中的伸缩恒等式，不以数值示例代替一般 Hardy 空间定理。"}
            </p>
            <p className="figure-source">
              {en
                ? "Construction based on the paper’s dilation and Fourier conventions."
                : "采用论文中的伸缩定义与 Fourier 变换约定。"}{" "}
              <a href="https://arxiv.org/abs/2306.05840">arXiv:2306.05840 ↗</a>
            </p>
          </>
        )}
        {kind === "campanato" && (
          <>
            <MathFormula tex={String.raw`\begin{aligned}A&=\operatorname{diag}(2,4),\quad B_k=A^k\Delta,\quad |\Delta|=1\\ f(x)&=\sin(2x_1)+\frac{x_2^2}{4}\end{aligned}`} />
            <MathFormula tex={String.raw`\begin{gathered}\int_{B_k}\bigl(f(x)-P_{B_k}^{d}f(x)\bigr)q(x)\,dx=0,\\ \forall q\in\mathcal P_d\end{gathered}`} />
            <p>{en ? "Δ is the reference disk and Bₖ its dilated region. The polynomial P removes the local trend; d is its maximum degree, and ℙd is the set of all polynomials up to that degree. The integral condition defines the projection used in this example." : "Δ 是参考圆盘，Bₖ 是伸缩后的区域。多项式 P 去掉局部趋势；d 是最高次数，ℙd 表示次数不超过 d 的多项式集合。积分条件定义了这个例子中的投影。"}</p>
            <p>
              {en
                ? "Change the anisotropic ball and polynomial degree. The projection removes the constant or affine trend; the residual shows the remaining local oscillation. Uniform-grid quadrature approximates the paper’s polynomial moment condition. The displayed RMS is one local L² residual, not the full ball quasi-Banach Campanato norm or a numerical proof of Hardy–Campanato duality."
                : "切换各向异性球的尺度和多项式次数。投影去除常数或仿射趋势，残差呈现剩余的局部振荡。均匀网格求积近似论文的多项式矩条件。图中 RMS 是单个球上的局部 L² 残差，不是完整的球拟 Banach Campanato 范数，也不是 Hardy–Campanato 对偶定理的数值证明。"}
            </p>
            <p className="figure-source">
              {en
                ? "Source: minimizing polynomial and dilated-ball definitions in the 2023 paper."
                : "来源：2023 年论文中的最小化多项式与伸缩球定义。"}{" "}
              <a href="https://arxiv.org/abs/2304.12120">arXiv:2304.12120 ↗</a>
            </p>
          </>
        )}
        </details>
      </figcaption>
    </figure>
  );
}
