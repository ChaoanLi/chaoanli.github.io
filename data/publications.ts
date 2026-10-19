import { Publication } from "../types";

export const publications: Publication[] = [
  {
    id: "validation",
    title:
      "Statistical Validation of Computer Models: Global and Subdomain Hypothesis Testing",
    authors: ["Chaoan Li", "Xianyang Zhang", "Rui Tuo"],
    venue: "Technometrics · under review; arXiv preprint",
    year: 2026,
    abstract: {
      en: "When does a simulator disagree with physical observations, and where? The Fourier Maximum Modulus Test (FMMT) uses kernel ridge regression and weighted Fourier coefficients to test global and subdomain discrepancies. In the compressible shear-layer study, the global test rejects with p < 0.01 while two Neumeyer–Dette tests do not reject. These are results for this case study, not a universal ranking of the methods.",
      zh: "仿真模型是否偏离物理观测，偏差又出现在哪里？傅里叶最大模检验（FMMT）结合核岭回归与加权 Fourier 系数，对整体与子域差异进行检验。在可压缩剪切层案例中，整体检验 p < 0.01，而两种 Neumeyer–Dette 检验未拒绝原假设；这一结果限于该案例，不代表方法的普遍优劣。",
    },
    link: "https://arxiv.org/abs/2604.17144",
    tags: ["Model validation", "Hypothesis testing", "Kernel methods"],
  },
  {
    id: "calibration",
    title: "A Unified Frequentist Framework for Computer Model Calibration",
    authors: ["Chaoan Li", "Rui Tuo"],
    venue: "IISE Transactions · under review",
    year: 2026,
    abstract: {
      en: "Which simulator parameter should we estimate when no parameter fits the physical process exactly? A chosen Hilbert-space norm defines the target. This framework puts L², Sobolev, and RKHS calibration in one estimation formulation and develops plug-in uncertainty quantification under stated regularity conditions. The exact fitting-RKHS target is a numerical benchmark outside the common undersmoothing theorem.",
      zh: "当任何参数都无法让模拟器与物理过程完全一致时，应估计哪个参数？选定的 Hilbert 空间范数决定校准目标。该框架统一 L²、Sobolev 与 RKHS 的估计形式，并在明确正则条件下构造插入式不确定性量化。精确拟合 RKHS 目标作为数值基准，不在共同欠平滑定理的覆盖范围内。",
    },
    tags: [
      "Computer model calibration",
      "Uncertainty quantification",
      "Hilbert spaces",
    ],
  },
  {
    id: "fourier",
    title:
      "Fourier Transform of Anisotropic Hardy Spaces Associated with Ball Quasi-Banach Function Spaces and Its Applications to Hardy–Littlewood Inequalities",
    authors: ["Chaoan Li", "Xianjie Yan", "Dachun Yang"],
    venue: "Acta Mathematicae Applicatae Sinica, English Series",
    year: 2024,
    abstract: {
      en: "Under the paper’s assumptions on the ball quasi-Banach space X, the Fourier transform of an anisotropic Hardy-space distribution has a continuous representative. Pointwise estimates in the transpose dilation geometry yield vanishing at the origin and Hardy–Littlewood inequalities. The interactive example below isolates the dilation identity used in that geometry; it does not numerically prove the theorem.",
      zh: "在论文对球拟 Banach 空间 X 的假设下，各向异性 Hardy 空间中分布的 Fourier 变换具有连续函数代表。转置伸缩几何下的逐点估计进一步导出原点处的消失性质与 Hardy–Littlewood 不等式。下图用可计算函数展示这一几何中的伸缩恒等式，不把数值示例当作定理证明。",
    },
    link: "https://doi.org/10.1007/s10255-024-1124-5",
    tags: [
      "Harmonic analysis",
      "Fourier transform",
      "Anisotropic Hardy spaces",
    ],
  },
  {
    id: "campanato",
    title:
      "Anisotropic Ball Campanato-Type Function Spaces and Their Applications",
    authors: ["Chaoan Li", "Xianjie Yan", "Dachun Yang"],
    venue: "Analysis and Mathematical Physics · 13, Article 50",
    year: 2023,
    abstract: {
      en: "This paper identifies anisotropic ball Campanato-type spaces as duals of the associated Hardy spaces and establishes Littlewood–Paley and Carleson measure characterizations under its assumptions on X. Subtracting a local polynomial is a basic ingredient: the residual measures oscillation that the polynomial cannot explain.",
      zh: "本文在对 X 的相应假设下，建立各向异性球 Campanato 型空间与 Hardy 空间的对偶关系，并给出 Littlewood–Paley 与 Carleson 测度刻画。局部多项式相减是其中的基本构造：残差反映局部多项式无法解释的振荡。",
    },
    link: "https://doi.org/10.1007/s13324-023-00814-w",
    tags: ["Harmonic analysis", "Hardy–Campanato duality", "Local oscillation"],
  },
];
