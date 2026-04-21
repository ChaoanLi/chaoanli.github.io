import { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: "p3",
    title: "Statistical Validation of Computer Models: Global and Subdomain Hypothesis Testing",
    authors: ["Chaoan Li", "Xianyang Zhang", "Rui Tuo"],
    venue: "arXiv preprint",
    year: 2025,
    abstract: {
      en: "This paper develops a formal frequentist framework for both global and subdomain validation of computer models. We propose the Fourier Maximum Modulus Test (FMMT), which leverages kernel ridge regression (KRR) to estimate the discrepancy between the computer model and the physical process, followed by a frequency-domain test based on weighted generalized Fourier coefficients. The theoretical analysis establishes the asymptotic normality of these coefficients, allowing for closed-form p-values. Simulation studies and a shear-layer experiment demonstrate that FMMT achieves high power, accurate Type I error control, and strong sensitivity to localized discrepancies.",
      zh: "本文为计算机模型的整体与子域验证构建了频率论框架，提出基于核岭回归的傅里叶最大模检验（FMMT），通过加权广义傅里叶系数的频域检验量化模型与物理过程之间的差异。理论分析建立了这些系数的渐近正态性，给出解析p值。仿真研究与剪切层实验表明，FMMT具有高功效、精确的I型误差控制和对局部差异的强敏感性。"
    },
    link: "https://arxiv.org/abs/2604.17144",
    tags: ["Computer Model Validation", "Nonparametric Statistics", "Kernel Methods"]
  },
  {
    id: "p1",
    title: "Fourier transform of anisotropic Hardy spaces associated with ball quasi-Banach function spaces and its applications to Hardy–Littlewood inequalities",
    authors: ["Chaoan Li", "Xianjie Yan", "Dachun Yang"],
    venue: "Acta Math. Appl. Sin. Engl. Ser.",
    year: 2024,
    abstract: {
      en: "This paper investigates the Fourier transform properties of anisotropic Hardy spaces and their applications to Hardy-Littlewood inequalities in the context of ball quasi-Banach function spaces.",
      zh: "本文研究了各向异性Hardy空间的Fourier变换性质及其在球拟Banach函数空间背景下对Hardy-Littlewood不等式的应用。"
    },
    link: "https://link.springer.com/article/10.1007/s10255-024-1124-5",
    tags: ["Harmonic Analysis", "Function Spaces"]
  },
  {
    id: "p2",
    title: "Anisotropic ball Campanato-type function spaces and their applications",
    authors: ["Chaoan Li", "Xianjie Yan", "Dachun Yang"],
    venue: "Anal. Math. Phys. 13",
    year: 2023,
    abstract: {
      en: "We establish the theory of anisotropic ball Campanato-type function spaces and explore their applications in harmonic analysis. This comprehensive study spans 71 pages.",
      zh: "我们建立了各向异性球Campanato型函数空间的理论，并探讨了它们在调和分析中的应用。这项综合研究共71页。"
    },
    link: "https://link.springer.com/article/10.1007/s13324-023-00814-w",
    tags: ["Harmonic Analysis", "Function Spaces"]
  }
];

