import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "p1",
    title: { en: "EasyPod", zh: "轻松愉快播客" },
    description: {
      en: "A Mandarin chat podcast exploring tech, academia, and life experiences.",
      zh: "一档讨论技术、学术和生活的中文播客节目。",
    },
    category: "Media",
    tech: ["Podcasting", "Content Creation"],
    liveUrl: "https://podcast.chaoanli.com/",
    status: "active",
  },
  {
    id: "p2",
    title: { en: "EasyGrader", zh: "智能评分助手" },
    description: {
      en: "Rubric-based assignment scoring and feedback, used during a teaching assistantship. Supports batch submissions and CSV export for instructor review.",
      zh: "在助教工作中使用的评分与反馈工具，支持自定义评分标准、批量提交与 CSV 导出，供教师复核。",
    },
    category: "AI Tool",
    tech: ["React", "TypeScript", "Express", "LLM APIs"],
    liveUrl: "https://easygrader.onrender.com",
    githubUrl: "https://github.com/ChaoanLi/EasyGrader",
    status: "active",
  },
  {
    id: "bsmoption",
    title: { en: "BSMoption", zh: "BSMoption 期权计算器" },
    description: {
      en: "European-option pricing with Black–Scholes–Merton, American-option binomial trees, implied volatility and five Greeks. Includes an English/Chinese interface and market-data inputs.",
      zh: "支持 Black–Scholes–Merton 欧式期权定价、美式期权二项树、隐含波动率与五项 Greeks，提供双语界面及市场数据输入。",
    },
    category: "Finance Tool",
    tech: ["React", "TypeScript", "Vercel functions"],
    liveUrl: "https://bsm-option-calculator.vercel.app",
    githubUrl: "https://github.com/ChaoanLi/BSMoption",
    status: "active",
  },
  {
    id: "p3",
    title: { en: "LakeAEcurve-INLA", zh: "湖泊面积-海拔曲线重建" },
    description: {
      en: "Bayesian reconstruction of lake area–elevation (AE) curves using INLA and SPDE-based spatial modeling.",
      zh: "使用 INLA 和基于 SPDE 的空间建模进行湖泊面积-海拔曲线的贝叶斯重建。",
    },
    category: "Research",
    tech: ["R", "INLA", "Bayesian Statistics", "Spatial Modeling"],
    githubUrl: "https://github.com/ChaoanLi/LakeAEcurve-INLA",
    status: "active",
  },
  {
    id: "p4",
    title: { en: "ModelValidator", zh: "模型验证框架" },
    description: {
      en: "Statistical framework for validating computer models via global and subdomain hypothesis testing.",
      zh: "通过全局和子域假设检验验证计算机模型的统计框架。",
    },
    category: "Research",
    tech: ["R", "Statistical Testing", "Model Validation"],
    status: "archived",
  },
  {
    id: "p5",
    title: { en: "E-value", zh: "多重检验校正评估" },
    description: {
      en: "Implementation and comparison of multiple-testing correction methods with performance evaluation framework and visualization tools for FDR control assessment.",
      zh: "多重假设检验校正方法的实现与比较，包含性能评估框架和 FDR 控制可视化工具。",
    },
    category: "Research",
    tech: ["R", "Multiple Testing", "FDR Control", "Visualization"],
    githubUrl: "https://github.com/ChaoanLi/E-value",
    status: "active",
  },
  {
    id: "p6",
    title: { en: "BIBD4ML", zh: "机器学习方法评估" },
    description: {
      en: "Evaluate and compare the performance of multiple machine learning methods using a Balanced Incomplete Block Design (BIBD).",
      zh: "使用平衡不完全区组设计 (BIBD) 评估和比较多个机器学习方法的性能。",
    },
    category: "Research",
    tech: ["R", "Machine Learning", "Experimental Design", "BIBD"],
    githubUrl: "https://github.com/ChaoanLi/BIBD4ML",
    status: "active",
  },
];
