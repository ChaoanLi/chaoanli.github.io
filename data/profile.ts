import { Profile } from "../types";

export const profile: Profile = {
  name: { en: "Chaoan Li", zh: "李朝安" },
  title: { en: "PhD Student", zh: "博士研究生" },
  affiliation: { en: "Texas A&M University", zh: "德州农工大学" },
  email: "chaoan@tamu.edu",
  location: { en: "College Station, TX", zh: "美国 得克萨斯州" },
  bio: {
    en: "I’m a Ph.D. student in Data Science at Texas A&M University, advised by Rui Tuo. I work on statistics, machine learning, and the validation of computer models.",
    zh: "我是德州农工大学数据科学博士生，导师为 Rui Tuo。我的研究关注统计学、机器学习与计算机模型验证，也喜欢把想法做成可以使用的工具。",
  },
  researchInterests: [
    { en: "Machine Learning", zh: "机器学习" },
    { en: "Mathematical Algorithms in AI", zh: "AI中的数学算法" },
    { en: "Non-parametric Statistics", zh: "非参数统计" },
  ],
  avatarUrl: "/ChaoanLi.png",
  linkedin: "https://www.linkedin.com/in/chaoan-li",
  researchgate: "https://www.researchgate.net/profile/Chaoan-Li-2",
  googleScholar: "https://scholar.google.com/citations?user=AVFau-sAAAAJ",
  github: "https://github.com/ChaoanLi",
};
