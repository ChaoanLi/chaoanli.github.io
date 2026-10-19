import { Profile } from "../types";

export const profile: Profile = {
  name: { en: "Chaoan Li", zh: "李朝安" },
  title: { en: "PhD Student", zh: "博士研究生" },
  affiliation: { en: "Texas A&M University", zh: "德州农工大学" },
  email: "chaoan@tamu.edu",
  location: { en: "College Station, TX", zh: "美国 得克萨斯州" },
  bio: {
    en: "I am a Ph.D. student in Industrial Engineering (Data Science track) at Texas A&M University, advised by Rui Tuo. My research focuses on statistical validation and calibration of computer models: detecting model discrepancies, defining calibration targets, and quantifying uncertainty. Previously, I studied harmonic analysis with Dachun Yang at Beijing Normal University, working on anisotropic Hardy and Campanato-type spaces.",
    zh: "我是德州农工大学工业工程博士生（数据科学方向），导师为 Rui Tuo。我的主要研究是计算机模型的统计验证与校准：检验模型偏差、定义校准目标，并量化估计的不确定性。此前，我在北京师范大学随杨大春教授研究调和分析，关注各向异性 Hardy 空间与 Campanato 型空间。",
  },
  researchInterests: [
    { en: "Model validation & calibration", zh: "模型验证与校准" },
    { en: "Uncertainty quantification", zh: "不确定性量化" },
    { en: "Harmonic analysis", zh: "调和分析" },
  ],
  avatarUrl: "/chaoan-li-portrait.jpg",
  linkedin: "https://www.linkedin.com/in/chaoan-li",
  researchgate: "https://www.researchgate.net/profile/Chaoan-Li-2",
  googleScholar: "https://scholar.google.com/citations?user=AVFau-sAAAAJ",
  github: "https://github.com/ChaoanLi",
};
